/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) return [];
  const stack = [];
  const arr = [];
  stack.push(root);
  while (stack.length !== 0) {
    arr.unshift([]);
    const len = stack.length;
    for (let i = 0; i < len; i++) {
      const node = stack.pop();
      if (node.val !== null) {
        arr[0].push(node.val);
      }
      if (node.left) stack.unshift(node.left);
      if (node.right) stack.unshift(node.right);
    }
  }
  return arr;
};
// @lc code=end
