const fs = require('fs')
const tokenize = require('./tokenize')
const html = fs.readFileSync('./sample.html', { encoding: 'utf8' })
// const realHtml = fs.readFileSync('/Users/gromych/projects/oleggromov-feisty/build/index.html', { encoding: 'utf8' })

function isSelfClosing(tag) {
  return ['meta', 'link', 'img'].indexOf(tag) !== -1
}

function getAttributeString(attrs) {
  const result = []
  for (let key in attrs) {
    result.push(`${key}="${attrs[key]}"`)
  }
  return result.length ? ' ' + result.join(' ') : ''
}

function printTree(root, depth = 0) {
  const shift = new Array(depth * 2 + 1).fill('').join(' ')

  if (root.tagName === '[ROOT]') {
    for (let child of root.children) {
      printTree(child, depth)
    }
    return
  }

  if (root instanceof ElementNode) {
    const suffix = isSelfClosing(root.tagName) ? `/` : ''

    console.log(shift + `<${root.tagName}${getAttributeString(root.attributes)}${suffix}>`)

    for (let child of root.children) {
      printTree(child, depth + 1)
    }

    if (!isSelfClosing(root.tagName) && root.tagName !== '[ROOT]') {
      console.log(shift + `</${root.tagName}>`)
    }
  } else if (root instanceof TextNode) {
    console.log(shift + root.text)
  }
}

class Node {
  constructor(parent) {
    this.parentNode = parent
  }
}

class TextNode extends Node {
  constructor(parent, text) {
    super(parent)
    this.text = text
  }
}

class ElementNode extends Node {
  constructor(parent, tagName, attributes = {}) {
    super(parent)
    this.tagName = tagName
    this.children = []
    this.attributes = attributes
  }
}

function parse(tokens) {
  const head = new ElementNode(null, '[ROOT]')
  const stack = [head]

  for (let token of tokens) {
    const top = stack[stack.length - 1]

    if (token.type === 'OPEN_TAG') {
      const element = new ElementNode(top, token.name, token.attributes)
      top.children.push(element)

      if (!isSelfClosing(token.name)) {
        stack.push(element)
      }
    } else if (token.type === 'CLOSE_TAG') {
      if (top.tagName !== token.name) {
        throw new Error(`Unclosed tag "${top.tagName}"`)
      }

      stack.pop()
    } else if (token.type === 'TEXT') {
      const text = new TextNode(top, token.text)
      top.children.push(text)
    }
  }

  return head
}

const tokens = tokenize(html)
console.log(tokens)
const tree = parse(tokens)
printTree(tree)

// const tokens = tokenize('<script></a></script>')
// console.log(tokens)
