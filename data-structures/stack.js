class Stack {
  constructor() {
    this.els = []
  }

  push(el) {
    this.els.push(el)
  }

  pop() {
    this._throwIfEmpty()
    return this.els.pop()
  }

  peek() {
    this._throwIfEmpty()
    return this.els[this.els.length - 1]
  }

  _throwIfEmpty() {
    if (!this.els.length) throw new Error('Stack is empty')
  }
}

module.exports = Stack
