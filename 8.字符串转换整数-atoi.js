/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  if (str === "") return 0;
  let [, sign, , space, sstr] = str
    .trimLeft()
    .match(/([-+]?)(0*)(\s*)(\d*)\s?/);
  if (space) return 0;
  const min = Math.pow(-2, 31);
  const max = Math.pow(2, 31) - 1;
  let res = sstr.replace(/ /g, "") * (sign === "-" ? -1 : 1);
  if (res >= max) {
    res = max;
  }
  if (res <= min) {
    res = min;
  }
  return res;
};
// @lc code=end
