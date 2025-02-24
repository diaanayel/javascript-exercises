const palindromes = function (str) {
  const _str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const maxIdx = _str.length - 1;
  const half = Math.floor(maxIdx / 2);

  for(let i = 0; i < half; i++) {
    if(!(_str.at(i) === _str.at(maxIdx - i))) return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
