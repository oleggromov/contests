class Solution:
  def checkPossibility(self, nums):
    skipped = False
    for i in range(len(nums) - 1):
      if nums[i] > nums[i + 1]:
        if not skipped:
          if i + 1 == len(nums) - 1:
            return not skipped
          elif i == 0 or nums[i + 1] > nums[i - 1]:
            skipped = True
          else:
            return False
        else:
          return False

    return True

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
assert sol.checkPossibility([3,4,2,3]) == False