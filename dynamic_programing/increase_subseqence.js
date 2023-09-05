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

// tools used:
// Array constructor will create a new array, if passed a number will create an array with that length.
// Array.prototype.fill() will fill the array. if passed one number fill the array with that number
//    if passed 3 numbers (0, 2, 4) will fill indices 2-4 with 0; (excluding final number).

// Math.max() can pass numbers to this function and it will find the largest.
//the spread opperator "Math.max(...maxLengthArray)" allows each object in the array to be passed as
//  an individual parameter.
