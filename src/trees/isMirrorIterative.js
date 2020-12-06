import {TreeNode} from "./TreeNode.js";

/**
 * 101. Symmetric Tree
 * https://leetcode.com/problems/symmetric-tree/description/?envType=problem-list-v2&envId=breadth-first-search
 * ------------------------------------------------
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
 *
 * Example 1:
 *
 * Input: root = [1,2,2,3,4,4,3]
 * Output: true
 * Example 2:
 *
 * Input: root = [1,2,2,null,3,null,3]
 * Output: false
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 1000].
 * -100 <= Node.val <= 100
 *
 * Follow up: Could you solve it both recursively and iteratively?
 * ------------------------------------------------
 * Runtime complexity - O(n)
 * Space complexity - O(n)
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
let isSymmetric = function(root) {
  let queue1 = [];
  let queue2 = [];

  queue1.push(root);
  queue2.push(root);

  while (queue1.length > 0) {
    let node1 = queue1.shift();
    let node2 = queue2.shift();

    if (node1 === null && node2 === null) continue;
    if (node1 === null || node2 === null) return false;
    if (node1.val !== node2.val) return false;

    queue1.push(node1.left);
    queue1.push(node1.right);

    queue2.push(node2.right);
    queue2.push(node2.left);
  }

  return true;
};


let tree = new TreeNode(
  1,
  new TreeNode(2,
    new TreeNode(3),
    new TreeNode(4),
  ),
  new TreeNode(2,
    new TreeNode(4),
    new TreeNode(3),
  )
);

console.log(isSymmetric(tree));