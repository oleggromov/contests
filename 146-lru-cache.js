class LRUCache {
  constructor(capacity) {
    this.capacity = capacity

    this.entries = new Map()
    this.history = {
      head: null,
      tail: null
    }
  }

  get(key) {
    if (this.entries.has(key)) {
      const node = this.entries.get(key)
      this._updateRecent(node)
      return node.value
    }
    return -1
  }

  put(key, value) {
    if (this.entries.size === this.capacity) {
      this._discardLast()
    }
    const node = new ListNode(value)
    this._appendRecent(node)
    this.entries.set(key, node)
  }

  _discardLast() {
    this.history.tail = this.history.tail.next
    this.history.tail.prev = null
  }

  _appendRecent(node) {
    if (this.history.head) {
      this.history.head.next = node
    } else {
      this.history.head = node
      this.history.tail = node
    }
  }

  _updateRecent(node) {
    // this.history.head =
  }
}

class ListNode {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

let cache = new LRUCache(2)

cache.put(1, 1)
console.log(cache.history)
cache.put(2, 2)
console.log(cache.history)
// console.log(cache.get(1), 'expected', 1)       // returns 1
// cache.put(3, 3)    // evicts key 2
// console.log(cache.get(2), 'expected', -1)       // returns -1 (not found)
// cache.put(4, 4)    // evicts key 1
// console.log(cache.get(1), 'expected', -1)       // returns -1 (not found)
// console.log(cache.get(3), 'expected', 3)       // returns 3
// console.log(cache.get(4), 'expected', 4)       // returns 4
