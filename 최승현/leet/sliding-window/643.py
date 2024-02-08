"""
https://leetcode.com/problems/maximum-average-subarray-i

k 길이의 윈도우를 이동시키며 최대 avg를 찾아라
"""
from typing import List


class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        """
        1. 누적합 구하기
        2. 부분합의 평균 중 최댓값 구하기


        Runtime 905 ms Beats 68.22% of users with Python3
        Memory 28.36 MB Beats 68.01% of users with Python3
        """
        N = len(nums)
        # sum of nums[i:j] ==> acc[j] - acc[i]
        # i inclusive, j exclusive
        acc = [0 for _ in range(N + 1)]
        for i in range(1, N + 1):
            acc[i] = acc[i - 1] + nums[i - 1]

        return max((acc[i + k] - acc[i]) / k for i in range(N - k + 1))


class Solution2:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        """
        1. 누적합 구하기
        2. 부분합의 평균 중 최댓값 구하기

        Solution1과 차이점은 acc 배열을 선언하지 않았다는 것. nums 길이가 이미 고정돼있어
        섵불리 insert했다간 doubling으로 인해 Solution1보다 처참한 메모리 점수를 받는다는
        것을 파악했다. (29.2 MB)

        따라서, nums 배열을 0으로 시작하는 배열이 아닌, nums[0]으로 시작하는 배열로 만들고
        별도의 함수로 빼어내 부분합을 구하는 방식으로 문제를 풀었다.

        Memory 29.13 MB Beats 41.74% of users with Python3 💀💀💀💀💀💀
        """

        def sumBetween(acc: List[int], start: int, end: int) -> int:
            """
            end exclusive
            """
            if start == 0:
                return acc[end - 1]
            return acc[end - 1] - acc[start - 1]

        N = len(nums)
        for i in range(1, N):
            nums[i] += nums[i - 1]

        return max(sumBetween(nums, i, i + k) / k for i in range(N - k + 1))


if __name__ == "__main__":
    s = Solution2()
    print(s.findMaxAverage([1, 12, -5, -6, 50, 3], 4))
    print(s.findMaxAverage([5], 1))
