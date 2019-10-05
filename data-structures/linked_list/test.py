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

  def test_add_at(self):
    self.assertIsNone(self.list.get_at(0))
    self.list.add_at(0, ListElement(2))
    self.assertIs(self.list.get_at(0).value, 2)
    self.list.add_at(0, ListElement(1))
    self.assertIs(self.list.get_at(0).value, 1)
    self.assertIs(self.list.get_at(1).value, 2)
    self.list.add_at(3, ListElement(4))
    self.assertIsNone(self.list.get_at(3))

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

  def test_delete_at(self):
    self.list.add_last(ListElement(1))
    self.list.add_last(ListElement(2))
    self.list.add_last(ListElement(3))
    self.assertIs(self.list.get_at(1).value, 2)
    self.list.delete_at(1)
    self.assertIs(self.list.get_at(1).value, 3)
    self.list.delete_at(1)
    self.assertIsNone(self.list.get_at(1))
    self.list.delete_at(0)
    self.assertIsNone(self.list.get_at(0))

  def test_get_at(self):
    self.assertIsNone(self.list.get_at(0))
    self.list.add_last(ListElement(1))
    self.list.add_last(ListElement(2))
    self.list.add_last(ListElement(3))
    self.assertIs(self.list.get_at(0).value, 1)
    self.assertIs(self.list.get_at(1).value, 2)
    self.assertIs(self.list.get_at(2).value, 3)
    self.assertIsNone(self.list.get_at(3))

if __name__ == '__main__':
  unittest.main()
