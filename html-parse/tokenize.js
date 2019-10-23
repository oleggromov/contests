function isWhitespace(char) {
  return [' ', '\t', '\n'].indexOf(char) !== -1
}

function isAlpha(char) {
  return 'abcdefghijklmnopqrstuvwxyz'.indexOf(char.toLowerCase()) !== -1
}

function token(type, attrs) {
  return {
    type,
    ...attrs
  }
}

class Default {
  consume(char) {
    if (char === '<') {
      return new TagOpener()
    } else if (!isWhitespace(char)) {
      return new Text(char)
    }

    return this
  }
}

class TagOpener {
  consume(char) {
    if (isAlpha(char)) {
      return new OpenTag(char)
    }

    if (char === '/') {
      return new CloseTag()
    }

    // Ignoring comments and doctype
    if (char === '!') {
      return new PassTag()
    }

    throw new Error('Unexpected input')
  }
}

class PassTag {
  consume(char) {
    if (char === '>') {
      return new Default()
    }

    return this
  }
}

class CloseTag {
  constructor() {
    this.type = 'CLOSE_TAG'
    this.name = []
  }

  consume(char, tokens) {
    if (char === '>') {
      tokens.push(token(this.type, {
        name: this.name.join('')
      }))
      return new Default()
    } else if (isWhitespace(char)) {
      // ???
    } else {
      this.name.push(char)
    }

    return this
  }
}

class OpenTag {
  constructor(firstChar) {
    this.type = 'OPEN_TAG'
    this.name = [firstChar]
    this.attributes = {}
  }

  consume(char, tokens) {
    if (isWhitespace(char)) {
      return new Attributes(this, tokens)
    } else if (char === '>') {
      return this.commit(tokens)
    } else {
      this.name.push(char)
    }

    return this
  }

  commit(tokens) {
    const attrs = { name: this.name.join('') }
    if (Object.keys(this.attributes).length) {
      attrs.attributes = this.attributes
    }

    tokens.push(token(this.type, attrs))
    return new Default()
  }

  setAttributes(attrs, tokens) {
    this.attributes = attrs
    return this.commit(tokens)
  }
}

class Attributes {
  constructor(parentTag, tokens) {
    this.parentTag = parentTag
    this.tokens = tokens
    this.attributes = {}
    this.current = { key: [], value: [] }
    this.state = 'AWAITING_KEY'
  }

  commitAttribute() {
    this.attributes[this.current.key.join('')] = this.current.value.join('')
    this.current = { key: [], value: [] }
  }

  consume(char) {
    if (char === '>') {
      return this.parentTag.setAttributes(this.attributes, this.tokens)
    }

    switch (this.state) {
      case 'AWAITING_KEY':
        if (!isWhitespace(char)) {
          this.state = 'KEY'
          this.current.key.push(char)
        }
        break
      case 'KEY':
        if (char === '=') {
          this.state = 'AWAITING_VALUE'
        } else if (!isWhitespace(char)) {
          this.current.key.push(char)
        }
        break
      case 'AWAITING_VALUE':
        if (char === '"') {
          this.state = 'VALUE'
        }
        break
      case 'VALUE':
        if (char === '"') {
          this.commitAttribute()
          this.state = 'AWAITING_KEY'
        } else {
          this.current.value.push(char)
        }
        break
    }

    return this
  }
}

class Text {
  constructor(firstChar) {
    this.type = 'TEXT'
    this.text = [firstChar]
  }

  consume(char, tokens) {
    if (char === '<') {
      tokens.push(token(this.type, {
        text: this.text.join('')
      }))
      return new TagOpener()
    } else {
      this.text.push(char)
    }

    return this
  }
}

function tokenize(str) {
  const tokens = []
  let state = new Default()

  for (let char of str) {
    state = state.consume(char, tokens)
  }

  return tokens
}

module.exports = tokenize