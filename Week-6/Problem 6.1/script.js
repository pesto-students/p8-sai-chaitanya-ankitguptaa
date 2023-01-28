let A = [1, 2, 3, 4, -10];
let B = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

//! Algorithm with brute force

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
//let B = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
//! Kadane Algorithm
function subarraySumKadane(array) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[j];
    if (max < sum) {
      max = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}

console.log("Algorithm with Simple implementation");
console.log("====================================");
console.log("Sum of array A =", subarraySumKadane(A));
console.log("Sum of array B =", subarraySumKadane(B));
