/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let pre = "null";
  let res = true;
  const bfs = function (root) {
    if (!root) return;
    bfs(root.left);
    if (pre >= root.val && pre !== "null") {
      res = false;
      return;
    }
    pre = root.val;
    bfs(root.right);
  };
  bfs(root);
  return res;
};
// @lc code=end
