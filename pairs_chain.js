//given an array of pairs return the longest chain of pairs.

//input: array of pairs.
//output: number
//constraints: pairs may not be sequential

var findLongestChain = function(pairs) {
  var firstNumberArray = [];
  for (var i = 0; i < pairs.length; i++) {
    firstNumberArray.push(pairs[i][0]);
  }
  firstNumberArray = firstNumberArray.sort((a,b) => {return a - b});
  var chainvalues = Array(firstNumberArray.length).fill(1);
  for (var j = 1; j < firstNumberArray.length; j++) {
    for (var k = j; k >= 0; k--) {
          if (firstNumberArray[j] > firstNumberArray[k] + 1) {
      chainvalues[j] = Math.max(chainvalues[j], chainvalues[k] +1);
    }
    }
  }
  return Math.max(...chainvalues);
};