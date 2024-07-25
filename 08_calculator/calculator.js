const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((product, num, index) => product === 0 && index === 0 ? product + num : product * num, 0);
};

const power = function(n, pow) {
  return Math.pow(n, pow);
};

const factorial = function(n) {
  if (n === 0) return 1;
  return factorial(n - 1) * n;
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
