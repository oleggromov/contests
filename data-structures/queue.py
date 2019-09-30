class Queue:
  def __init__(self):
    self.items = []

  def enqueue(self, value):
    self.items.append(value)

  def dequeue(self):
    return self.items.pop(0) if len(self.items) else None

queue = Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

print(queue.dequeue())
print(queue.dequeue())
print(queue.dequeue())
print(queue.dequeue())
