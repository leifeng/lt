/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const dics = {
    1: "qwertyuiopQWERTYUIOP",
    2: "asdfghjklASDFGHJKL",
    3: "zxcvbnmZXCVBNM",
  };
  return words.filter((item) => {
    let bool = true;
    let n;
    if (dics[1].indexOf(item.charAt(0)) !== -1) {
      n = 1;
    } else if (dics[2].indexOf(item.charAt(0)) !== -1) {
      n = 2;
    } else {
      n = 3;
    }
    for (let i = 1; i < item.length; i++) {
      if (dics[n].indexOf(item.charAt(i)) === -1) {
        bool = false;
        break;
      }
    }
    return bool;
  });
};
// @lc code=end
