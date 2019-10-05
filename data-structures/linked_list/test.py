import unittest
from linked_list import LinkedList, ListElement

class TestLinkedList(unittest.TestCase):
  def setUp(self):
    self.list = LinkedList()

  def test_add_last(self):
    self.assertIsNone(self.list.get_last())
    self.list.add_last(ListElement(1))
    self.list.add_last(ListElement(2))
    self.list.add_last(ListElement(3))
    self.assertIs(self.list.get_first().value, 1)
    self.assertIs(self.list.get_last().value, 3)

  def test_add_first(self):
    self.assertIsNone(self.list.get_first())
    self.list.add_first(ListElement(3))
    self.list.add_first(ListElement(2))
    self.list.add_first(ListElement(1))
    self.assertIs(self.list.get_first().value, 1)
    self.assertIs(self.list.get_last().value, 3)

  def test_delete_first(self):
    self.list.add_last(ListElement(1))
    self.list.add_last(ListElement(2))
    self.assertIs(self.list.get_first().value, 1)
    self.list.delete_first()
    self.assertIs(self.list.get_first().value, 2)
    self.list.delete_first()
    self.assertIsNone(self.list.get_first())

  def test_delete_last(self):
    self.list.add_last(ListElement(1))
    self.list.add_last(ListElement(2))
    self.assertIs(self.list.get_last().value, 2)
    self.list.delete_last()
    self.assertIs(self.list.get_last().value, 1)
    self.list.delete_last()
    self.assertIsNone(self.list.get_last())

if __name__ == '__main__':
  unittest.main()