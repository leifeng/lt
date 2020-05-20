/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];
  let pre = nums[0];
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    pre = Math.max(nums[i], pre + nums[i]);
    res = Math.max(pre, res);
  }
  return res;
};
// @lc code=end
