"""
https://leetcode.com/problems/maximum-depth-of-binary-tree
"""

from typing import Optional


class TreeNode:
    """Definition for a binary tree node."""

    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        """
        최대 10^4 개의 노드니까 DFS로 탐색하면 되겠는데?
        """

        def dfs(cur: Optional[TreeNode], depth: int) -> int:
            if cur == None:
                return depth

            left = dfs(cur.left, depth + 1)
            right = dfs(cur.right, depth + 1)

            return max(left, right)

        return dfs(root, 0)
