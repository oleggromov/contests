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


