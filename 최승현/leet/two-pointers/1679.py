"""
https://leetcode.com/problems/max-number-of-k-sum-pairs
"""

from typing import List
from bisect import bisect_left, bisect_right


class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        """
        경우의 수가 나뉘는 건 잘 모르겠고 일단 정렬 후 bisect_left, bisect_right로 가능한 범위를 지워보겠음

        결과: Time Limit Exceeded 💀💀💀💀💀💀💀
        """
        nums = sorted(filter(lambda x: x < k, nums))
        N = len(nums)
        HALF_N = bisect_right(nums, k // 2)

        visited = [False for _ in range(N)]
        cnt = 0

        for i in range(HALF_N):
            if visited[i]:
                continue
            visited[i] = True

            a = nums[i]
            b = k - a

            for j in range(bisect_left(nums, b), bisect_right(nums, b)):
                if visited[j]:
                    continue

                ## Fimally
                visited[j] = True
                cnt += 1
                break

        return cnt


class Solution2:
    def maxOperations(self, nums: List[int], k: int) -> int:
        """
        아 이번에도 left, right 포인터를 가운데로 보내면서 세야 하는걸까?

        결과
        Runtime 480 ms Beats 92.00% of users with Python3 👑👑👑👑👑👑👑
        Memory 28.74 MB Beats 88.21% of users with Python3 👑👑👑👑👑👑👑
        """
        nums = sorted(filter(lambda x: x < k, nums))
        N = len(nums)
        l, r = 0, N - 1
        cnt = 0

        while l < r:
            add = nums[l] + nums[r]
            if add == k:
                cnt += 1
                l += 1
                r -= 1
            elif add < k:
                l += 1
            else:
                r -= 1

        return cnt


if __name__ == "__main__":
    s = Solution2()

    print(s.maxOperations([1, 2, 3, 4], 5))
    print(s.maxOperations([3, 1, 3, 4, 3], 6))
