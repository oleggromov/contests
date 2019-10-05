class ListElement():
  def __init__(self, value):
    self.value = value
    self.next = None

class LinkedList():
  def __init__(self):
    self.head = None

  def add_first(self, element):
    element.next = self.head
    self.head = element

  def add_at(self, index, element):
    if index == 0:
      self.add_first(element)
    else:
      prev = self.get_at(index - 1)
      if prev:
        prev.next = element
        current = self.get_at(index)
        if current:
          element.next = current

  def add_last(self, element):
    if self.head:
      self.get_last().next = element
    else:
      self.head = element

  def get_first(self):
    if not self.head:
      return None

    return self.head

  def get_last(self):
    if not self.head:
      return None

    last = self.head
    while last.next:
      last = last.next

    return last

  def get_at(self, index):
    if not self.head:
      return None

    current = self.head
    current_index = 0

    while current.next and current_index < index:
      current = current.next
      current_index += 1

    if current_index < index:
      return None

    return current

  def delete_first(self):
    if self.head:
      self.head = self.head.next

  def delete_last(self):
    if self.head.next:
      second_to_last = self.head
      last = self.head.next

      while last.next:
        second_to_last = last
        last = last.next

      second_to_last.next = None
    elif self.head:
      self.head = None

  def delete_at(self, index):
    if index == 0:
      self.delete_first()
    else:
      prev = self.get_at(index - 1)
      if prev:
        prev.next = self.get_at(index + 1)
