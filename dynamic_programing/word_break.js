//Given a string of words and a dictionary return true if the string can be split into two or more words.
//input: string and dictionary
//output: boolean

//first attempt time complexity O(n^2)

var wordBreak = function(s, wordDict) {
  //iterate through the string and pulling out letter combos
  var findWord = (string, wordDict) => {
    for (var i = 0; i < string.length; i++) {
      var testWord = string.slice(0, i);
      //iterate through dictonary
      for (var j = 0; j < wordDict.length; j++) {
        //compare recent testword to dictonary words
        //if testword matches pull it out of the string.
        if (testWord === wordDict[j]) {
          string.splice(0, i);
          //try to find another word
          if (string.length != 0) {
            return findWord(string, wordDict);
          }
          //if string is empty the string was made up of words
          if (string.length === 0) {
            return true;
          }
        }
      }
      if (string.length != 0 && i === string.length - 1) {
        return false;
      }
    }
  }
  findWord(s, wordDict);
};