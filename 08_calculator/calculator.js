const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(array) {
	let counter = 0;
  for (let i=0; i<array.length; i++) {
    counter += array[i];
  }
  return counter;
};

const multiply = function(array) {
  let result = 1;
  for (let i=0; i<array.length; i++) {
    result *= array[i];
  }
  return result;
};

const power = function(x,y) {
	return Math.pow(x,y);
};

const factorial = function(num) {
	let result = 1;
  if (num === 0) return result;
  for (let i=1; i<=num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
