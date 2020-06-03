/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const arr=[]
  const dfs = (root) => {
    if (!root) return;
    dfs(root.left);
    arr.push(root.val)
    dfs(root.right);
  };
  dfs(root);
  return arr;
};
// @lc code=end
