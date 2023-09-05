//given an array of pairs return the longest chain of pairs.

//input: array of pairs.
//output: number
//constraints: pairs may not be sequential

var findLongestChain = function(pairs) {
  //sort the array pairs from smallest starting number to highest
  var sortedArray = pairs.sort((a, b) => {
    return a[0] - b[0];
  });
  //create new array with pair chain up to i;
  var chainvalues = Array(sortedArray.length).fill(1);
  //iterate through the sorted array and check if two pairs can be chained;
  for (var j = 1; j < sortedArray.length; j++) {
    for (var k = j; k >= 0; k--) {
      //update the value in the chainedvalues array if pairs can be chained;
      if (sortedArray[j][0] > sortedArray[k][1]) {
        chainvalues[j] = Math.max(chainvalues[j], chainvalues[k] +1);
      }
    }
  }
  //return the largest value in the chainvalues array;
  return Math.max(...chainvalues);
};
