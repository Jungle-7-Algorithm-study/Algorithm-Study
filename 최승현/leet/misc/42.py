"""
https://leetcode.com/problems/trapping-rain-water
"""

from typing import List


class Solution:
    def trap(self, height: List[int]) -> int:
        """
        각각 왼쪽, 오른쪽 끝에 거대한 벽이 있다고 가정하고 물을 채운다.
        두 경우의 교집합만을 취한 결과가 정답임.

        Runtime 104 ms Beats 67.80% of users with Python3
        Memory 18.16 MB Beats 96.36% of users with Python3
        """
        N = len(height)
        lr = [0 for _ in range(N)]  # 오른쪽 벽이 막혀있는 수조
        rl = [0 for _ in range(N)]  # 왼쪽 벽이 막혀있는 수조

        ## left to right
        last_max = 0
        for i, h in enumerate(height):
            if h <= last_max:
                lr[i] = last_max - h
            else:
                last_max = h

        ## right to left
        last_max = 0
        for i in range(N - 1, -1, -1):
            h = height[i]
            if h <= last_max:
                rl[i] = last_max - h
            else:
                last_max = h

        # print(lr)
        # print(rl)

        ## intersection
        return sum(min(a, b) for a, b in zip(lr, rl))


if __name__ == "__main__":
    s = Solution()
    print(s.trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
    print(s.trap([4, 2, 0, 3, 2, 5]))
