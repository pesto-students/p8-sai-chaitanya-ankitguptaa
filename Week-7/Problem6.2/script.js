//Problem 6.2 Spiral Order Matrix II
// Time Complexity: O(n)
// Space Complexity: O(n)
const A = [[ 1, 2, 3 ],[ 4, 5, 6 ],[ 7, 8, 9 ]];

var spiralOrder = function (matrix) {
  let rowCount = matrix.length ?? 0;
  if (rowCount == 0) {
      return result;
  }

  let columnCount = matrix[0].length ?? 0;

  let top = 0, bottom = rowCount - 1, left = 0, right = columnCount - 1;
  let direction = 0;

  let result = [];
  while (top <= bottom && left <= right) {
      if (direction === 0) { // left to right
          for (let i = left; i <= right; i++) {
              result.push(matrix[top][i]);
          }
          top++;
          direction = 1;
      } else if (direction === 1) { // top to bottom
          for (let i = top; i <= bottom; i++) {
              result.push(matrix[i][right]);
          }
          right--;
          direction = 2;
      } else if (direction === 2) { // right to left
          for (let i = right; i >= left; i--) {
              result.push(matrix[bottom][i]);
          }

          bottom--;
          direction = 3;
      } else if (direction === 3) { // bottom to top
          for (let i = bottom; i >= top; i--) {
              result.push(matrix[i][left]);
          }

          left++;
          direction = 0;
      }
  }

  return result;
};

console.log(spiralOrder(A));