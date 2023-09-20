//given a string containing parentheses determine if the parentheses are used in the correct order and closed.

//input: string
//output: boolean

var isValid = function(s) {
  var storageObject = { "(": 0, "{": 0, "[": 0 };
  for (var i = 0; i < s.length; i++) {
    //count number of beginning braces;
    if (s[i] === "(") storageObject["("] += 1;
    if (s[i] === "{") storageObject["{"] += 1;
    if (s[i] === "[") storageObject["["] += 1;
    // if ending braces appears before beginning braces
    if (s[i] === ")" && storageObject["("] < 1) return false;
    if (s[i] === "}" && storageObject["{"] < 1) return false;
    if (s[i] === "]" && storageObject["["] < 1) return false;
    // if ending braces appear after beginning braces
    if (s[i] === ")" && storageObject["("] > 1) storageObject["("] -= 1;
    if (s[i] === "}" && storageObject["{"] > 1) storageObject["{"] -= 1;
    if (s[i] === "]" && storageObject["["] > 1) storageObject["["] -= 1;
  }
  //run through storage object
  for (var keys in storageObject) {
    if (storageObject[keys] != 0) return false;
  }
};
