const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) {
    return 0;
  } else {
    let cats = 0;
    for (let row of matrix) {
      cats += row.filter((item) => item === "^^").length;
    }
    return cats;
  }
}

module.exports = {
  countCats,
};
