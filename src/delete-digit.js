const { NotImplementedError } = require('../extensions/index.js');

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
  const numStr = n.toString();
  let maxNumber = 0;

  for (let i = 0; i < numStr.length; i++) {
     const newNumber = parseInt(numStr.substring(0, i) + numStr.substring(i + 1));

     if (newNumber > maxNumber) {
      maxNumber = newNumber;
    }
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
