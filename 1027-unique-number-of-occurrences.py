class Solution:
  def uniqueOccurrences(self, arr: List[int]) -> bool:
    '''
    The solution is pretty stupid: it uses 2 dictionaries to first store
    number of occurrences of each unique item and then another one to check
    if we have duplicates there.

    Time-wise, it should be pretty efficient since we're going over only 
    all array items (n) and then unique number of items u <= n, giving 
    time complexity of O(n+n) at most.

    Space wise, it's worse and actually uses up to O(n) to store original
    values and then up to about O(n) again for the unique keys.
    '''
    occurrences = {}
    
    for n in arr:
      occurrences[n] = occurrences[n] + 1 if occurrences.get(n) else 1
        
    unique = {}
        
    for value in occurrences.values():
      if not unique.get(value):
        unique[value] = True
      else:
        return False

    return True