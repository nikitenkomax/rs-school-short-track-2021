/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const regExp = /^[a-fA-F0-9][a-fA-F0-9]$/;
  const nArr = n.split('-');
  let result = true;
  for (let i = 0; i < nArr.length; i++) {
    if (regExp.test(nArr[i])) {
      result = true;
    } else {
      return false;
    }
  }
  return result;
}

module.exports = isMAC48Address;
