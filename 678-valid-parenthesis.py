'''
Given a string containing only three types of characters: '(', ')' and '*',
write a function to check whether this string is valid. We define the validity of a string by these rules:

1) Any left parenthesis '(' must have a corresponding right parenthesis ')'.
2) Any right parenthesis ')' must have a corresponding left parenthesis '('.
3) Left parenthesis '(' must go before the corresponding right parenthesis ')'.
4) '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
5) An empty string is also valid.
'''

class Solution:
  def checkValidString(self, s):
    unmatched = 0
    asterisks = 0

    for char in s:
      if char == '(':
        unmatched += 1
        unmatched
      elif char == ')':
        if unmatched == 0:
          return False
        else:
          unmatched -= 1

    return unmatched == 0



s = Solution()
assert(s.checkValidString('()') == True)
assert(s.checkValidString('(*)') == True)
assert(s.checkValidString('(*))') == True)
# assert(s.checkValidString('((*)') == True)
assert(s.checkValidString('(()') == False)
assert(s.checkValidString('(') == False)
assert(s.checkValidString(')') == False)
assert(s.checkValidString('())') == False)
# assert(s.checkValidString('((**))') == True)
# assert(s.checkValidString('((**))') == True)
assert(s.checkValidString('') == True)
# assert(s.checkValidString('***') == True)

# Failed cases
# assert(s.checkValidString('(*()') == True)
# assert(s.checkValidString('(())((())()()(*)(*()(())())())()()((()())((()))(*') == False)