/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const newArr = JSON.parse(JSON.stringify(names));
  for (let i = 0; i < names.length; i++) {
    let count = 1;
    for (let k = 0; k < names.length; k++) {
      if (i === k) {
        newArr.splice(k, 1, newArr[k]);
      } else if (newArr[i] === newArr[k]) {
        newArr.splice(k, 1, `${newArr[k]}(${count})`);
        count++;
      }
    }
  }
  return newArr;
}

module.exports = renameFiles;
