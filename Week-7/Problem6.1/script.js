let A = [1, 2, 3, 4, -10];
let B = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

//! Algorithm with Brute Force
//! Time Complexity: O(n power of 2)
//! Space Complexity: O(1)
function subarraySum(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = i; j < array.length; j++) {
      sum = sum + array[j];
      if (max < sum) {
        max = sum;
      }
    }

    sum = 0;
  }
  return max;
}

console.log("Algorithm with Brute Force");
console.log("==========================");
console.log("Sum of array A =", subarraySum(A));
console.log("Sum of array B =", subarraySum(B));

//! Kadane's Algorithm
//! Time Complexity: O(n)
//! Space Complexity: O(1)
function subarraySumKadane(array) {
  let max = array[0];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
    if (max < sum) {
      max = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}

console.log("Implementation with Kadane's Algorithm");
console.log("====================================");
console.log("Sum of array A =", subarraySumKadane(A));
console.log("Sum of array B =", subarraySumKadane(B));
