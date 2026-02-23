const leapYears = function (year) {
  const isYearDivByFour = year % 4 === 0;
  const isCentury = year % 100 === 0;
  const isYearDivByFourHund = year % 400 === 0;

  if (isYearDivByFour && (!isCentury || isYearDivByFourHund)) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
