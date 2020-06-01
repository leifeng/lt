/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  return isMirror(root, root);
};
function isMirror(root1, root2) {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;
  return (
    root1.val === root2.val &&
    isMirror(root1.left, root2.right) &&
    isMirror(root1.right, root2.left)
  );
}
// @lc code=end
