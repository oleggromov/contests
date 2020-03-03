# https://classroom.udacity.com/courses/ud513/lessons/7117335401/concepts/78875247320923

"""The LinkedList code from before is provided below.
Add three functions to the LinkedList.
"get_position" returns the element at a certain position.
The "insert" function will add an element to a particular
spot in the list.
"delete" will delete the first element with that
particular value.
Then, use "Test Run" and "Submit" to run the test cases
at the bottom."""

class Element(object):
  def __init__(self, value):
    self.value = value
    self.next = None

class LinkedList(object):
  def __init__(self, head=None):
    self.head = head

  def __str__(self):
    result = []
    next = self.head

    while next:
      result.append(str(next.value))
      next = next.next

    return ','.join(result)

  def append(self, new_element):
    if not self.head:
      self.head = new_element
      return

    last = self.head
    while last.next:
      last = last.next

    last.next = new_element

  def get_position(self, position):
    """Get an element from a particular position.
    Assume the first position is "1".
    Return "None" if position is not in the list."""
    current = self.head
    index = 1

    while current.next and index < position:
      current = current.next
      index += 1

    if index == position:
      return current

    return None

  def insert(self, new_element, position):
    """Insert a new node at the given position.
    Assume the first position is "1".
    Inserting at position 3 means between
    the 2nd and 3rd elements."""
    prev = None
    current = self.head
    index = 1

    while index < position and current.next:
      prev = current
      current = current.next
      index += 1

    if index == position:
      prev.next = new_element
      new_element.next = current


  def delete(self, value):
    """Delete the first node with a given value."""
    prev = None
    current = self.head

    while current:
      if current.value == value:
        if prev:
          prev.next = current.next
        else:
          self.head = current.next
        return

      prev = current
      current = current.next

# Test cases
# Set up some Elements
e1 = Element(1)
e2 = Element(2)
e3 = Element(3)
e4 = Element(4)

# Start setting up a LinkedList
ll = LinkedList(e1)
ll.append(e2)
ll.append(e3)
ll.insert(e4,3)
print(ll, ' <- LIST')

# Test delete
print('>>>> delete 1')
ll.delete(1)
print(ll, ' <- LIST')

print('>>>> delete 4')
ll.delete(4)
print(ll, ' <- LIST')

print('>>>> delete 2')
ll.delete(2)
print(ll, ' <- LIST')

ll.delete(2)