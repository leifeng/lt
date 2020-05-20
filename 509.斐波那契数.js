/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  if (N < 2) return N;
  let prev = 0,
    curr = 1;
  for (let i = 1; i < N; i++) {
    let sum = prev + curr;
    prev = curr;
    curr = sum;
  }
  return curr;
};
// @lc code=end
