"""
Find Polygon With the Largest Perimeter
둘레가 가장 큰 다각형 찾기
"""


from typing import List


class Solution:
    def largestPerimeter(self, nums: List[int]) -> int:
        ret = -1
        nums.sort()

        for end in range(len(nums) - 1, 1, -1):
            left_sum = nums[0] + nums[1]
            right = nums[end]
            index = 2

            while index < end:
                left_sum += nums[index]
                index += 1

            if left_sum > right:
                ret = max(ret, left_sum + right)

        return ret


if __name__ == "__main__":
    TC = [[5, 5, 5], [1, 12, 1, 2, 5, 50, 3], [5, 5, 50], [2, 5, 4, 5]]

    sol = Solution()

    for tc in TC:
        ans = sol.largestPerimeter(tc)
        print(f"ans: {ans}")
