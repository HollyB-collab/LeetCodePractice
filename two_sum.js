// Given an arry of numbers and a target number
// return the indexes of the first two numbers that add up to the target.

//Inputs: array of numbers, target number.
//Outputs: an array of indexes.
//EdgeCases: We can assume the array is not empty. We can assume two numbers in the array will equal the target.
//          The result must be two different indexes.


//brute force solution: Nested For-Loops
//Time complexity O(n^2)  Worst possible!

const TwoSum1 = (array, target) => {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (i != j && array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
};


// intelligent storage solution: Store information in an object
// Time complexit O(n) linear time much better.

const TwoSum2 = (array, target) => {
  let storage = {};
  for (var i = 0; i < array.length; i++) {
    storage[array[i]] = i;
  }

  for (var j = 0; j < array.length; j++) {
    let missingNumber = target - array[j];
    if (storage[missingNumber]) {
      return [j, storage[missingNumber]];
    }
  }
};
