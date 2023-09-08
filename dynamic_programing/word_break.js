//Given a string of words and a dictionary return true if the string can be split into two or more words.
//input: string and dictionary
//output: boolean

var wordBreak = function(s, wordDict) {
  //iterate through the string until one word is found
  var findWord = (string, wordDict) => {
    for (var i = 0; i < string.length; i++) {
      var testWord = string.slice(0, i);
      //iterate through dictonary
      for (var j = 0; j < wordDict.length; j++) {
        if (testWord === wordDict[j]) {
          string.splice(0, i);
          //try to find another word
          if (string.length != 0) {
            return findWord(string, wordDict);
          }
          if (string.length === 0) {
            return true;
          }
        }
      }
      if (string.length != 0 && i === string.length -1) {
        return false;
      }
    }
  }
  findWord(s, wordDict);
};