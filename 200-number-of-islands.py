from typing import List

'''
Given a 2d grid map of '1's (land) and '0's (water),
count the number of islands. An island is surrounded
by water and is formed by connecting adjacent lands
horizontally or vertically. You may assume all four
edges of the grid are all surrounded by water.
'''

class Solution:
  moves = {(-1,0), (0,1), (1,0), (0,-1)}

  def numIslands(self, grid: List[List[str]]) -> int:
    self.grid = grid
    self.width = range(len(grid))
    self.height = range(len(grid[0]))
    return self.find_islands()

  def get_grid(self, point: (int, int)):
    return self.grid[point[0]][point[1]]

  def in_grid(self, diff: (int, int)):
    return (diff[0] in self.width and diff[1] in self.height)

  def possible_moves(self, move: (int, int)):
    return {(move[0] + dy, move[1] + dx) for dy, dx in self.moves}

  def next(self, move: (int, int)):
    return set(filter(self.in_grid, self.possible_moves(move)))

  def find_islands(self):
    islands = 0

    known_soil = set()
    known_water = set()

    queue = [(0,0)]
    while len(queue):
      move = queue.pop(0)

      if self.get_grid(move) == 1:
        self.next(move)
        islands += 1
      else:
        pass

    return islands

# Solution ends
def print_grid(grid):
  for row in grid:
    print(row)
  print('<< end grid')

example_grid = [
  [1,1,0,0,0,0],
  [1,1,0,0,0,0],
  [0,0,1,0,0,0],
  [0,0,0,1,1,1]
]

sol = Solution()
result = sol.numIslands(example_grid)

print(result)
print(sol.known_soil)

# This is to ensure we check the grid correctly.
assert sol.in_grid((0,0)) == True
assert sol.in_grid((-1,0)) == False
assert sol.in_grid((0,-1)) == False
assert sol.in_grid((-1, -1)) == False
assert sol.in_grid((3,5)) == True
assert sol.in_grid((3,6)) == False
assert sol.in_grid((4,5)) == False
assert sol.in_grid((4,6)) == False