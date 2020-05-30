/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let res = true;
  const dfs = (p, q) => {
    if ((!p && q) || (p && !q)) {
      res = false;
      return;
    }
    if (!p && !q) {
      return;
    }
    console.log(p.val, q.val);
    if (p.val !== q.val) {
      res = false;
      return;
    }
    dfs(p.left, q.left);
    dfs(p.right, q.right);
  };
  dfs(p, q);
  return res;
};
// @lc code=end
