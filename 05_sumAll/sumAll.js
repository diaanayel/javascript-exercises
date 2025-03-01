const sumAll = function(a, b) {
  if(a < 0 || b < 0
  || !Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';

  const min = Math.min(a, b);
  const max = Math.max(a, b);

  /*
  let sum = 0;
  for(let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
  */

  // Arithmetic Series Summation Formula
  return ((max - min + 1) * (min + max)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
