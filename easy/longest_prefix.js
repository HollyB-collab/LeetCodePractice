//given an array of strings find the longest common prefix between all the strings.
//input: array
//output: string
//edgecases: empty array, empty string

var longestCommonPrefix = function(strs) {
  var result = '';
  for (var i = 0; i < strs[0].length; i++) {
    var currentChar = strs[0][i];
    if (strs.every(string => string[i] === currentChar)) {
      result += currentChar;
    } else break;
  }
  return result;
};
