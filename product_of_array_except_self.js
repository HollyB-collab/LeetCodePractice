//given an array of numbers return an array of numbers where
//the number at each index is all of the numbers added together excluding the number at that index.

//Input: array
//Output: array
//Edgecases: none currently

//nested for-loops O(n^2), not the best time complexity

var productExceptSelf1 = function(nums) {
  var result = [];
  for (var i = 0; i < nums.length; i ++) {
    var total = 1;
    for (var j = 0; j < nums.length; j++) {
      if (j != i ) {
        total = total * nums[j]
      }
    }
    result.push(total);
  }
  return result;
};

//the for-loop is only nested if the number is less than 0.
//could still be O(n^2) if all the numbers in the array are less than 0.

var productExceptSelf2 = function(nums) {
  var total = 1;
  var result = [];
  for (var i = 0; i < nums.length; i ++) {
    total = total * nums[i];
  }
  for (var i = 0; i < nums.length; i ++) {
    if (nums[i] === 0) {
      var newtotal = 1;
      for (var j = 0; j < nums.length; j++) {
        if (j != i) {
          newtotal = newtotal * nums[j];
        }
      }
      result.push(newtotal);
    }
  else {
      result.push(total/nums[i]);
    }
  }
  return result;
};


//final attempt O(n) time complexity

var productExceptSelf3 = function(nums) {
  //create array to store the product of all numbers lower than i
  const productBelowI = [];
  //iterate over nums and multiply
  for (var i = 0; i < nums.length; i++) {
    var current = nums[i];
    if (productBelowI.length === 0) {
      productBelowI.push(current);
    } else {
      productBelowI.push(current * productBelowI[i - 1]);
    }
  }
  //at the end of this for loop you'll have an array with the product of all the numbers below i
  var current = 1;
  var result = [];
  //iterate backward over productBellowI
  for (var i = nums.length-1; i > 0; i--) {
    result.push(productBelowI[i - 1] * current);
    //current will now store the product of all numbers greater than i;
    current = nums[i] * current;
  }
  result.push(current);
  return result.reverse();
};