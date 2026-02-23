const convertToCelsius = function (degrees) {
  // x °F ≘ (x − 32) × ⁠5/9⁠ °C
  return Number((((degrees - 32) * 5) / 9).toFixed(1));
};

const convertToFahrenheit = function (degrees) {
  // x °C ≘ (x × ⁠9/5⁠ + 32) °F
  return Number(((degrees * 9) / 5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
