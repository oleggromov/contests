const Stack = require('./stack')

describe('Stack', () => {
  let stack

  beforeEach(() => {
    stack = new Stack()
  })

  it('push & pop: returns last pushed element', () => {
    stack.push(5)
    expect(stack.pop()).toBe(5)
  })
  it('push & pop: maintains LIFO order', () => {
    stack.push(5)
    stack.push(6)
    stack.push(7)
    expect(stack.pop()).toBe(7)
    expect(stack.pop()).toBe(6)
    expect(stack.pop()).toBe(5)
  })
  it('pop: throws exception when empty', () => {
    expect(() => {
      stack.pop()
    }).toThrow()
  })
  it('peek: does not change last element', () => {
    stack.push(5)
    stack.peek()
    expect(stack.pop()).toBe(5)
  })
  it('peek: throws exception when empty', () => {
    expect(() => {
      stack.peek()
    }).toThrow()
  })
})
