const leapYears = function(year) {
  const isCencury = year % 100 === 0;
  const isDivisibleBy4 = year % 4 === 0;
  const isDivisibleBy400 = year % 400 === 0;

  return ((isCencury && isDivisibleBy400)
       || (isDivisibleBy4 && !isCencury));
};

// Do not edit below this line
module.exports = leapYears;
