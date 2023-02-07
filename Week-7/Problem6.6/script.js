/*
Problem 6.6 : 3 sum
*/
let S = [-1,2,1,-4];

//BRUTE FORCE
// Time Complexity: O(n power 2)
// Space Complexity: O(1)
const pairWithGivenDifference = function (nums, k) {
  const result = new Map();
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && k === nums[j] - nums[i] && !result.has(nums[j])) {
        result.set(nums[j]);
      }
    }
  }

  return result.size;
};

console.log(pairWithGivenDifference(A, B));
console.log(pairWithGivenDifference(A1, B1));
