/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const nArr = n.toString().split('');
  const sumFunc = (arr) => {
    let count = 0;
    arr.forEach((item) => {
      count += +item;
    });
    const countLength = count.toString().split('').length;
    if (countLength >= 2) {
      let newCount = 0;
      arr.forEach((item) => {
        newCount += +item;
      });
      const newArr = newCount.toString().split('');
      return sumFunc(newArr);
    }
    return count;
  };

  let count = 0;
  nArr.forEach((item) => {
    count += +item;
  });
  const countLength = count.toString().split('').length;

  if (countLength >= 2) {
    let newCount = 0;
    nArr.forEach((item) => {
      newCount += +item;
    });
    const newArr = newCount.toString().split('');
    return sumFunc(newArr);
  }
  return count;
}

module.exports = getSumOfDigits;
