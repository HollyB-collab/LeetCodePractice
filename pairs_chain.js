//given an array of pairs return the longest chain of pairs.

//input: array of pairs.
//output: number
//constraints: pairs may not be sequential

var findLongestChain = function(pairs) {
  var sortedArray = pairs.sort((a, b) => {
    return a[0] - b[0];
  });
  var chainvalues = Array(sortedArray.length).fill(1);
  for (var j = 1; j < sortedArray.length; j++) {
    for (var k = j; k >= 0; k--) {
      if (sortedArray[j][0] > sortedArray[k][1]) {
        chainvalues[j] = Math.max(chainvalues[j], chainvalues[k] +1);
      }
    }
  }
  return Math.max(...chainvalues);
};
