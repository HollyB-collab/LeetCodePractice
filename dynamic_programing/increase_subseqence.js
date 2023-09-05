//given an array of numbers, return the longest subsequence where each number increases from left to right.

//input: array
//output: number (length of longest subsequence)
//edgecases: array length will be greater than or equal to one

var lengthOfLIS = function(nums) {
  var maxLengthArray = Array(nums.length).fill(1);
  for (var i = 1; i < nums.length; i++) {
    for (var j = i; j >=0; j--) {
      if (nums[i] > nums[j]) {
        maxLengthArray[i] = Math.max(maxLengthArray[i], maxLengthArray[j] + 1)
      }
    }
  }
  return Math.max(...maxLengthArray);
};
