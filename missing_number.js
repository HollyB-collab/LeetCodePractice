//given an array of consecutive numbers, find the number that is missing in the set.

//input: array
//output: one number
//edge case: no missing number in the set.

//first solution: O(n) time.
var missingNumber1 = function(nums) {
  //sort the array in ascending order
  var sortedNums = nums.sort((a, b) => {return a - b});
  //iterate over the array
  for (var i = 1; i < nums.length; i++) {
    //make sure next number in set is incremented by one
    if (nums[i] != nums[i - 1] + 1) {
      return nums[i-1] + 1;
    }
  }
  //covers the edge case
  return nums[nums.length-1] + 1;
};

