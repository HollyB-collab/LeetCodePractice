//given a number x return true if x is a palidrome.

//input: number
//output: boolean

var isPalindrome = function(x) {
  //change number to string
  var originalString = x.toString();
  //reverse string
  var reversedString = originalString.split("").reverse().join("");
  //check if original and reversed string are same
  if (originalString === reversedString) {
    return true;
  } else {
    return false;
  }
};