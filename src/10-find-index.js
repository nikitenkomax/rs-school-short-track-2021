/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let count = array.length;
  const num = (param) => Math.floor(param / 2);
  if (array[num(count)] === value) {
    return num(count);
  }
  while (array[num(count)] < value) {
    count = num(count) + array.length;
    if (array[num(count)] === value) {
      return num(count);
    }
  }
  while (array[num(count)] > value) {
    count = num(count);
    if (array[num(count)] === value) {
      return num(count);
    }
  }
  return value;
}
module.exports = findIndex;
