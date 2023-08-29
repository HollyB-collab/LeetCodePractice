//given a number of stairs return the number of ways a person can climb the stairs.
//you can climb stairs one or two at a time.

//input: number of stairs
//output: ways to climb the stairs

//method 1 fibonacci sequence
//Fib(n) = Fib(n-1) + Fib(n-2)
var climbStairs = function(n) {
  var firstNum = 1;
  var secondNum = 2;

  if (n <= 2 ) return n;
  for (var i = 3; i <= n; i++) {
    var thirdNum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = thirdNum;
  }
  return secondNum;
};
