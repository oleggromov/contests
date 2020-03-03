class Solution:
  def mySqrt(self, x: int) -> int:
    '''
    TODO: precompute & use binary search
    '''
    if x == 0:
      return 0

    start = 2
    while start * start <= x:
      start += 1

    return start - 1

s = Solution()
print(s.mySqrt(1))
print(s.mySqrt(2))
print(s.mySqrt(3))
print(s.mySqrt(5))
print(s.mySqrt(6))
print(s.mySqrt(8))