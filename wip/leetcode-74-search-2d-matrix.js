/**
 * https://leetcode.com/problems/search-a-2d-matrix/
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] === target) {
                return true
            }
        }
    }

    return false
}
