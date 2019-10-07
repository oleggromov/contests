"""You're going to write a binary search function.
You should use an iterative approach - meaning
using loops.
Your function should take two inputs:
a Python list to search through, and the value
you're searching for.
Assume the list only has distinct elements,
meaning there are no repeated values, and
elements are in a strictly increasing order.
Return the index of value, or -1 if the value
doesn't exist in the list."""

def binary_search(input, target):
  left = -1
  right = len(input) - 1

  while right - left > 1:
    middle = left + (right - left) // 2
    if target > input[middle]:
      left = middle
    else:
      right = middle

  if target == input[right]:
    return right

  return -1

test_list = [1,3,9,11,15,19,29]
test_val1 = 25
test_val2 = 15
print(binary_search(test_list, test_val1))
print(binary_search(test_list, test_val2))

list_2 = [1,2,3,4,5,6,7,8]
print(binary_search(list_2, 0))
print(binary_search(list_2, 1))
print(binary_search(list_2, 4))
print(binary_search(list_2, 5))
print(binary_search(list_2, 8))
print(binary_search(list_2, 10))