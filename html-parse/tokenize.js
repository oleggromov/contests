function isWhitespace(char) {
  return [' ', '\t', '\n'].indexOf(char) !== -1
}

function isAlpha(char) {
  return 'abcdefghijklmnopqrstuvwxyz'.indexOf(char.toLowerCase()) !== -1
}

function isNonParseable(tag) {
  return ['script', 'style'].indexOf(tag) !== -1
}

function cloneNonEmpty(obj) {
  const result = {}

  for (let key in obj) {
    if (
      typeof obj[key] !== 'object'
      || Array.isArray(obj[key]) && obj[key].length
      || Object.keys(obj[key]).length
    ) {
      result[key] = obj[key]
    }
  }

  return result
}

class Token {
  constructor(type) {
    this.type = type
  }

  commit(tokens, tokenProps) {
    tokens.push({
      type: this.type,
      ...cloneNonEmpty(tokenProps)
    })
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
      return new OpenTag([char])
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

class CloseTag extends Token {
  constructor(name = []) {
    super('CLOSE_TAG')
    this.name = name
  }

  consume(char, tokens) {
    if (char === '>') {
      this.commit(tokens, {
        name: this.name.join('')
      })
      return new Default()
    } else if (!isWhitespace(char)) {
      this.name.push(char)
    }

    return this
  }
}

class OpenTag extends Token {
  constructor(name = []) {
    super('OPEN_TAG')
    this.name = name
  }

  consume(char, tokens) {
    if (isWhitespace(char)) {
      return new Attributes(this.name)
    } else if (char === '>') {
      const name = this.name.join('')
      this.commit(tokens, { name })

      if (isNonParseable(name)) {
        return new TextUntil(name)
      }

      return new Default()
    } else {
      this.name.push(char)
    }

    return this
  }
}

class Attributes extends OpenTag {
  constructor(name = []) {
    super(name)
    this.current = { key: [], value: [] }
    this.attributes = {}
    this.state = 'AWAITING_KEY'
  }

  commitAttribute() {
    this.attributes[this.current.key.join('')] = this.current.value.join('')
    this.current = { key: [], value: [] }
  }

  consume(char, tokens) {
    if (char === '>') {
      this.commit(tokens, {
        name: this.name.join(''),
        attributes: this.attributes
      })
      return new Default()
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

class Text extends Token {
  constructor(firstChar) {
    super('TEXT')
    this.text = firstChar ? [firstChar] : []
  }

  consume(char, tokens) {
    if (char === '<') {
      this.commit(tokens, {
        text: this.text.join('')
      })
      return new TagOpener()
    } else {
      this.text.push(char)
    }

    return this
  }
}

class TextUntil extends Text {
  constructor(closeTag) {
    super()
    this.closeTag = closeTag
    this.mode = 'NORMAL'
    this.temp = []
  }

  consume(char, tokens) {
    console.log(this.mode, `${char} "${this.temp.join('')}", "${this.text.join('')}"`)

    switch (this.mode) {
      case 'NORMAL':
        if (char === '<') {
          this.mode = 'AWAITING_CLOSE'
          this.temp.push(char)
        } else {
          this.text.push(char)
        }
        break
      case 'AWAITING_CLOSE':
        this.temp.push(char)
        if (char === '/') {
          this.mode = 'CONSUMING_TAG'
        } else {
          this.mode = 'NORMAL'
          this.text = [...this.text, ...this.temp]
          this.temp = []
        }
        break
      case 'CONSUMING_TAG':
        this.temp.push(char)
        if (char === '>') {
          const currentTag = this.temp.slice(2).join('')

          // console.log(this.temp)

          if (this.closeTag === currentTag) {
            this.commit(tokens, {
              text: this.text.join('')
            })
            return new CloseTag(this.temp.slice(2)).consume('>', tokens)
          }

          this.mode = 'NORMAL'
          this.text = [...this.text, ...this.temp]
          this.temp = []
        }
        break
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