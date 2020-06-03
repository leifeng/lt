/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 3) return n;
  let first = 1;
  let second = 2;
  let thrid;
  for (let i = 3; i <= n; i++) {
    thrid = first + second;
    first = second;
    second = thrid;
  }
  return thrid;
};
// @lc code=end
