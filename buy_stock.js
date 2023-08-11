//given an array of numbers that represent the price of a particular stock on a linear timeset of days
//return the maximum profit you could make buying and selling the stock.
//return 0 if you can't make a profit.

//Inputs: array of prices.
//Output: number.
//Constraints: you can't buy stock on day/index 5 and sell on day/index 2.
//EdgeCases: if you can't make a profit return 0. array will contain numbers.

const BuyStock1 = (array) => {
  // store maxProfit in variable
  var maxProfit = 0;
  // set buyPrice variable
  var buyPrice = array[0];
  // iterate through the array assume every variable could be the sell price.
  for (var i = 0; i < array.length; i++) {
    var profit = array[i] - buyPrice;
    maxProfit = Math.max(maxProfit, profit);
    if (array[i] < buyPrice) buyPrice = array[i];
  }
  return maxProfit;
};
