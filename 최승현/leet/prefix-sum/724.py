"""
https://leetcode.com/problems/find-pivot-index
"""

from typing import List
class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        left_acc = 0
        right_acc = sum(nums[1:])

        if left_acc == right_acc:
            return 0

        for i in range(1, len(nums)):
            left_acc += nums[i - 1]
            right_acc -= nums[i]

            if left_acc == right_acc:
                return i

        return -1


if __name__ == "__main__":
    s = Solution()

    print(s.pivotIndex([1,7,3,6,5,6]))
    print(s.pivotIndex([1,2,3]))
    print(s.pivotIndex([2,1,-1]))
