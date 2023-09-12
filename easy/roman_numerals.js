//given a roman numeral return the number it represents

//input: string
//output: number

var romanToInt = function(s) {
  var result = 0;
 //create object that stores the numeral values
  var numeralValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
 //break string up into contingent values
  var numerals = s.split("");
  var integers = [];
  for (var i = 0; i < numerals.length; i ++) {
    integers.push(numeralValues[numerals[i]]);
  }
  //check for cases where 4 or 9 exist
  for (var j = 1; j < integers.length; j++) {
    var firstInteger = integers[j - 1];
    var secondInteger = integers[j];

    if (firstInteger < secondInteger) {
      var secondLength = (secondInteger.toString(s)).length; //10
      integers[j] = secondInteger - (10^secondLength);
      integers[j-1] = 0;
    }
  }
 //add values together
  for (var i = 0; i < integers.length; i ++) {
    result = result + integers[i];
  }
  return result;
};