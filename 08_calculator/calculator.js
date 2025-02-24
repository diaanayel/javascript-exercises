const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(nums) {
  return (nums === null || nums.length === 0) ? 0 
    : nums.reduce((sum, num) => sum += num);
};

const multiply = function(nums) {
  return (nums === null || nums.length === 0) ? 0 
    : nums.reduce((res, num) => res *= num);
};

const power = function(n, p) {
  return n ** p;
};

const factorial = function(n) {
  if(n === 0 || n === 1) return 1;

  let res = 1;
  for(let i = 2; i <= n; i++) {
    res *= i;
  }
  return res;
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
