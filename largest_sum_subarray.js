//given an array find a contiguous subarray with the largest sum.

//Input: array
//Output: number (sum)
//Constraints: O(n)
//Edges: none currently


var maxSubArray1 = function(nums) {
  var totalSum = nums[0];
  //add all the numbers in the array up.
  for (var i = 1; i < nums.length; i++) {
    totalSum= totalSum + nums[i];
  }
  var maxSum = totalSum;
  //iterate over the array from left to right
  for (var i = 0; i < nums.length; i++) {
    if (totalSum - nums[i] > maxSum) {
      maxSum = maxSum - nums[i];
    } else {
      var leftStop = i;
      break;
    }
  }
  //iterate over the array from right to left
  for (var i = nums.length-1; i > -1; i--) {
    if (totalSum - nums[i] > maxSum) {
      maxSum = maxSum - nums[i];
    } else {
      var rightStop = i;
      break;
    }
  }
  return totalSum;
};
