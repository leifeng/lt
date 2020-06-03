/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  let n = 0;
  const stack = [];
  stack.push(root);
  while (stack.length !== 0) {
    n++;
    const len = stack.length;
    for (let i = 0; i < len; i++) {
      const node = stack.pop();
      if (node.left) stack.unshift(node.left);
      if (node.right) stack.unshift(node.right);
   }
  }
  return n;
};
// @lc code=end
