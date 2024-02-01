"""
https://leetcode.com/problems/kth-largest-element-in-an-array
"""
from typing import List, Any
from heapq import heapify, heappop


class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        """
        k번째로 큰 원소는 len(nums) - k + 1번째로 작은 원소를 찾는 것과 동일하다.
        """
        j = len(nums) - k + 1
        heapify(nums)

        result = -1
        for _ in range(j):
            result = nums[0]
            heappop(nums)

        return result
