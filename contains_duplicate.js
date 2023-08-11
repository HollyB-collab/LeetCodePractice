//given an array of numbers return true if any number appears twice.

//Input: array of numbers
//Output: boolean.
//Edgecases: zero array.

//brute force nested for-loops O(n^2)
var containsDuplicate1 = function(nums) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if (i != j && nums[i] === nums[j] ) {
        return true;
      }
    }
  }
  return false;
};

//store information in an object to avoid the nested for-loops O(n)
var containsDuplicate2 = function(nums) {
  var storage = {};
  for (var i = 0; i < nums.length; i++ ) {
    //remember to put the undefined case first.
    if (storage[nums[i]] !== undefined) {
      return true;
    }
    if (storage[nums[i]] === undefined) {
      storage[nums[i]] = 1;
    }
  }
  return false;
};
