//given a roman numeral return the number it represents

//input: string
//output: number

var romanToInt = function(s) {
 //create object that stores the numeral values
  var numeralValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
 //break string up into contingent values
  var numerals = s.split("");
  var integers = [];
  for (var i = 0; i < numerals.length; i ++) {
    integers.push(numeralValues[numerals[i]]);
  }
  //check for cases where 4 or 9 exist
  for (var j = 1; j < integers.length; j++) {
    var firstInteger = j - 1;
    var secondInteger = j;
    if (firstInteger < secondInteger) {
      secondInteger[0] - 1;
      firstInteger = 0;
    }
  }
 //add values together
};