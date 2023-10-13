//add a function to the prototype of an array that will return the last element in the array or return -1 if the array is empty.

//input: array
//output: last value in array

Array.prototype.last = function () {
  var last = this.length;
  if (last === 0) {
    return -1;
  }
  return this[last - 1];
};
