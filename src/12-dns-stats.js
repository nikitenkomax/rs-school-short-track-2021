/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const newD = [];
  const obj = {};
  const toStr = (str) => str.slice(3, -1).split('\\').join('');
  domains.forEach((elem) => {
    newD.push(elem.split('.').reverse());
  });

  let newDOrig = JSON.parse(JSON.stringify(newD));
  newDOrig = newDOrig.map((item) => `.${item.join('.')}`);
  if (domains[0] !== undefined) {
    const elem = domains[0].split('.').reverse()[0];
    newD.push([elem]);
  }

  newD.sort((a, b) => a.length - b.length);
  const regExpArr = newD.map((item) => new RegExp(`^\\.${item.join('\\.')}`));

  regExpArr.forEach((regExp) => {
    let count = 0;
    let str = '';
    for (let i = 0; i < newDOrig.length; i++) {
      if (regExp.test(newDOrig[i])) {
        count++;
        str = regExp.toString();
      }
      if (newDOrig[i + 1] === undefined) {
        obj[toStr(str)] = count;
      }
    }
  });
  return obj;
}

module.exports = getDNSStats;
