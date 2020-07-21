def bin_search_recursive(arr, val, left=0, right=None):
  '''
  Very verbose and error-prone because of many ifs solution.
  '''
  if right == None:
    right = max(len(arr) - 1, 0)

  if right - left == 1:
    if arr[left] == val:
      return left
    elif arr[right] == val:
      return right
    else:
      return -1
  elif right - left == 0:
    return -1

  middle = (left + right) // 2
  if val <= arr[middle]:
    return bin_search_recursive(arr, val, left, middle)
  else:
    return bin_search_recursive(arr, val, middle, right)


def bin_search(arr, val):
  left = 0
  right = len(arr) - 1

  while right - left > 1:
    middle = (left + right) // 2
    if val > arr[middle]:
      left = middle
    else:
      right = middle

  if len(arr) == 0:
    return -1
  if arr[right] == val:
    return right
  elif arr[left] == val:
    return left
  else:
    return -1


def bin_search_concise(arr, val):
  left = -1
  right = len(arr) - 1

  if len(arr) == 0:
    return -1

  while right - left > 1:
    middle = (left + right) // 2
    if val > arr[middle]:
      left = middle
    else:
      right = middle

  if val == arr[right]:
    return right

  return -1



assert bin_search_recursive([1,2,3], 2) == 1
assert bin_search_recursive([5,7,12,28,33], 5) == 0

assert bin_search_recursive([5,7,12,28,33], 33) == 4
assert bin_search_recursive([5,7,12,28,33], 17) == -1
assert bin_search_recursive([5,7,12,28], 7) == 1
assert bin_search_recursive([5,7,12,28], 12) == 2
assert bin_search_recursive([5,7,12,28], 13) == -1
assert bin_search_recursive([1,1,1,1,1], 1) == 0
assert bin_search_recursive([], 10) == -1
assert bin_search_recursive([1], 10) == -1

assert bin_search_concise([1,2,3], 2) == 1
assert bin_search_concise([5,7,12,28,33], 5) == 0
assert bin_search_concise([5,7,12,28,33], 33) == 4
assert bin_search_concise([5,7,12,28,33], 17) == -1
assert bin_search_concise([5,7,12,28], 7) == 1
assert bin_search_concise([5,7,12,28], 12) == 2
assert bin_search_concise([5,7,12,28], 13) == -1
assert bin_search_concise([1,1,1,1,1], 1) == 0
assert bin_search_concise([], 10) == -1
assert bin_search_concise([1], 10) == -1
