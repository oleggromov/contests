'''
You are a product manager and currently leading a team to develop a new product.
Unfortunately, the latest version of your product fails the quality check. Since
each version is developed based on the previous version, all the versions after
a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first
bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which will return whether version
is bad. Implement a function to find the first bad version. You should minimize
the number of calls to the API.
'''

# The isBadVersion API is already defined for you.
# @param version, an integer
# @return a bool
def isBadVersion(version):
  versions = [False, False, False, True, True]
  return versions[version - 1]

class Solution:
  def firstBadVersion(self, n):
    '''
    There was a tricky thing: we don't count from 0,
    so that left shall start from 1 and right shall be n
    since it's the last existing index.
    '''
    left = 1
    right = n

    while right - left > 1:
      middle = left + (right - left) // 2

      if (isBadVersion(middle)):
        right = middle
      else:
        left = middle

    if isBadVersion(left):
      return left

    return right

s = Solution()
first_bad = s.firstBadVersion(5)
print(first_bad)