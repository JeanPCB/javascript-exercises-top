const removeFromArray = function (arr, ...items) {
  return arr.filter((el) => !items.includes(el));
};

// Do not edit below this line
module.exports = removeFromArray;
