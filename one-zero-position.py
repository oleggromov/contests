'''
There's an infinite string "01001000100001..." where after each 1
number of zeroes increases by 1. Given a position in such string,
return character found at this position.
'''
def char_at(index):
  zeroes = 0
  ones = 0
  # O(n) solution
  while index + 1 > 0:
    if zeroes < ones + 1:
      zeroes += 1
    else:
      zeroes = 0
      ones += 1
    index -= 1

  if zeroes == 0:
    return '1'

  return '0'

def gen_str(length):
  string = []
  zeroes = 0
  ones = 0
  # O(n)
  while length > 0:
    if zeroes < ones + 1:
      string.append('0')
      zeroes += 1
    else:
      string.append('1')
      ones += 1
      zeroes = 0
    length -= 1

  return ' '.join(string)

print(gen_str(1))
print(gen_str(2))
print(gen_str(4))
print(gen_str(10))
print(gen_str(14))
print(gen_str(27))
print(gen_str(999)[-1])
print(char_at(1000))

# index:  0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
# string: 0  1  0  0  1  0  0  0  1  0  0  0  0  1  0  0  0  0  0  1  0  0  0  0  0  0  1 ...
assert(char_at(0) == '0')
assert(char_at(1) == '1')
assert(char_at(2) == '0')
assert(char_at(7) == '0')
assert(char_at(8) == '1')
assert(char_at(9) == '0')
assert(char_at(13) == '1')
assert(char_at(14) == '0')
assert(char_at(15) == '0')
assert(char_at(18) == '0')
assert(char_at(19) == '1')
assert(char_at(20) == '0')
assert(char_at(25) == '0')
assert(char_at(26) == '1')

# Assert that both work identically
for length in range(1, 1024):
  assert(char_at(length - 1) == gen_str(length)[-1])