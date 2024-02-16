"""
https://leetcode.com/problems/container-with-most-water
"""

from typing import List
from bisect import bisect_left


class Solution:
    def maxArea(self, height: List[int]) -> int:
        """
        일단 잘 모르겠으니 O(N ** 2) 솔루션부터 풀어보자

        결과: Time Limit Exceeded
        """
        N = len(height)
        result = 0

        for i in range(N - 1):
            for j in range(i + 1, N):
                result = max(result, (j - i) * min(height[i], height[j]))

        return result


class Solution2:
    def maxArea(self, height: List[int]) -> int:
        """
        1. 정렬한다.
        2. 높이 h로 만들 수 있는 최대 크기 부피의 컨테이너를 계산한다.

        결과

        Runtime 592 ms Beats 17.91% of users with Python3
        Memory 29.44 MB Beats 84.77% of users with Python3
        """
        N = len(height)

        height_sorted = sorted(val for val in height)

        res = 0

        left, right = 0, N - 1
        for h in height_sorted:
            while left < right and height[left] < h:
                left += 1
            while left < right and height[right] < h:
                right -= 1
            res = max(res, (right - left) * h)

        return res


class Solution3:
    def maxArea(self, height: List[int]) -> int:
        """
        정렬하는 과정을 생략하고 그냥 1부터 max(height) 높이의 컨테이너를 계산해보자.

        결과

        Runtime 443 ms Beats 99.15% of users with Python3 👏👏👏👏👏👏👏
        Memory 30.07 MB Beats 40.01% of users with Python3
        """

        N = len(height)

        res = 0

        left, right = 0, N - 1
        for h in range(1, max(height) + 1):
            while left < right and height[left] < h:
                left += 1
            while left < right and height[right] < h:
                right -= 1

            res = max(res, (right - left) * h)

        return res


if __name__ == "__main__":
    s = Solution3()

    print(s.maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
    print(s.maxArea([1, 1]))
