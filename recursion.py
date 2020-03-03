def recursive(input, depth=0):
  print('called with:', input, 'depth:', depth)
  if input <= 0:
    print('base, depth:', depth)
    return input
  else:
    output = recursive(input - 1, depth + 1)
    print('returning:', output, 'depth:', depth)
    return output

# print('Result:', recursive(3))


"""Implement a function recursively to get the desired
Fibonacci sequence value.
Your code should have the same input/output as the
iterative code in the instructions.
          0  1  2  3  4  5  6  7   8   9
Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,  ...
"""

values = {}
def get_fib(position):
  # base case
  if position <= 1:
    return position

  # memoize
  if not (position - 1) in values:
    values[position - 1] = get_fib(position - 1)

  return values[position - 1] + get_fib(position - 2)

# Test cases
print(get_fib(1))
print(get_fib(2))
print(get_fib(3))
print(get_fib(4))
print(get_fib(5))
print(get_fib(6))
print(get_fib(9))
print(get_fib(11))
print(get_fib(0))
print(get_fib(50))
print(values)
