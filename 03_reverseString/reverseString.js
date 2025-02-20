const reverseString = function(str) {
  const len = str.length;
  let reversedStr = '';

  for(let i = len - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
  // if built in functions allowed
  // return str.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
