/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nArr = n.toString().split('');
  const min = JSON.parse(JSON.stringify(nArr)).sort((a, b) => a - b)[0];
  const resultArr = [];
  let ind = 0;
  for (let i = 0; i < nArr.length; i++) {
    const newNumArr = JSON.parse(JSON.stringify(nArr));
    for (let k = ind; k < nArr.length; k++) {
      if (newNumArr[k] === min) {
        newNumArr.splice(k, 1);
        resultArr.push(+newNumArr.join(''));
        ind = k + 1;
        break;
      }
    }
  }
  return resultArr.sort((a, b) => b - a)[0];
}

module.exports = deleteDigit;
