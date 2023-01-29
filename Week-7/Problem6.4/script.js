//Problem 6.4 : Best time to buy and sell stock
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minIndex = 0;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[minIndex] < prices[i]) {
      let profit = prices[i] - prices[minIndex];
      maxProfit = Math.max(profit, maxProfit);
    } else {
      minIndex = i;
    }
  }

  return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
