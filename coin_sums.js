

var makeChange = function(total) {
  var counter = 0;
  var coins = [1, 2, 5, 10, 20, 50, 100, 200];

  var recursivePart = function(index, remainder) {
    var coin = coins[index];
    if (index === 0) {
      remainder % coin === 0 && counter++;
      return;
    }
    while (remainder >= 0) {
      recursivePart(index - 1, remainder);
      remainder -= coin;
    }
  };
recursivePart(coins.length-1, total);
  return counter;
};
