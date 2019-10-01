class Solution:
  '''
  This is a stupid, brute-force solution.
    Time: O(n * number of exclusions) - linear, ok
    Space: creates 0 < num_exclusions < 2 additional arrays
  Isn't ideal.
  '''
  def checkPossibility(self, nums):
    exclusions = 0
    while exclusions < 2:
      result, i = self.loop(nums)
      if result:
        return True
      else:
        exclusions += 1
        nums = nums[:i] + nums[i + 1:]

    return False

  def loop(self, nums):
    for i in range(len(nums) - 1):
      if nums[i] > nums[i + 1]:
        if nums[i + 1] > nums[i - 1] or i == 0:
          return False, i
        else:
          return False, i + 1

    return True, None

sol = Solution()
# Positive
assert sol.checkPossibility([1,2,3]) == True
assert sol.checkPossibility([-1,4,2,3]) == True
# Negative
assert sol.checkPossibility([3,2,4,3]) == False
assert sol.checkPossibility([3,2,4,3,5,2]) == False
# Edge cases
assert sol.checkPossibility([7,1,2,3]) == True
assert sol.checkPossibility([1,2,3,0]) == True
# Failed cases
assert sol.checkPossibility([2,3,3,2,4]) == True