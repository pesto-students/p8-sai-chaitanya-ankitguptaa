//Problem 6.3 Sort array of 0's,1's and 2's
// Using Brute Force
var sortArray = function (array, length) {
  let red = [];
  let white = [];
  let blue = [];
  for (let i = 0; i < length; i++) {
    if (array[i] === 0) {
      red.push(array[i]);
    } else if (array[i] === 1) {
      white.push(array[i]);
    } else if (array[i] === 2) {
      blue.push(array[i]);
    }
  }

  return red.concat(white.concat(blue));
};

console.log(sortArray([0, 2, 1, 2, 0], 5));
console.log(sortArray([0, 1, 0], 3));

// Using DNF Sort Algorithm
// If 0, swap array[low] & array[mid], low++, mid++
// If 1, mid++
// If 2, swap array[mid] & array[high], high--
let DNFSort = function (array, n) {
  let low = 0, mid = 0, high = n - 1;
  while (mid <= high) {
    switch (array[mid]) {
      case 0:
        array = swap(array, low, mid);
        low++;
        mid++;
        break;
      case 1:
        mid++;
        break;
      case 2:
        array = swap(array, mid, high);
        high--;
        break;
    }
  }

  return array;
};

let swap = function (array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
};

console.log(DNFSort([0, 2, 1, 2, 0], 5));
console.log(DNFSort([0, 1, 0], 3));
