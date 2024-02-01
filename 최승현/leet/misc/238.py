"""
https://leetcode.com/problems/product-of-array-except-self
"""
from typing import List

class Solution1:
    """
    누적곱 배열을 두개 만들어 각각 왼쪽, 오른쪽 누적곱 연산을 저장한다.

    Runtime 184 ms Beats 43.34% of users with Python3
    Memory 24.92 MB Beats 28.19% of users with Python3
    """
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        """
        O(N) solution
        """
        N = len(nums)
        # 왼쪽에서부터 자라나는 누적곱
        pi_left = [1 for _ in range(N)]
        # 오른쪽에서부터 자라나는 누적곱
        pi_right = [1 for _ in range(N)]

        pi_left[0] = nums[0]
        pi_right[-1] = nums[-1]

        for i in range(1, N):
            pi_left[i] = pi_left[i - 1] * nums[i]
            pi_right[N - i - 1] = pi_right[N - i] * nums[N - i - 1]
        
        sol = [1 for _ in range(N)]
        sol[0] = pi_right[1]
        sol[-1] = pi_left[-2]

        for i in range(1, N - 1):
            sol[i] = pi_left[i - 1] * pi_right[i + 1]
        
        return sol


class Solution2:
    """
    sol 배열을 오른쪽 누적곱으로 만든 뒤에 순회하며 진짜 값을 구하는 방식. 공간복잡도가 O(1)이 됩니다.

    Runtime 179 ms Beats 48.54% of users with Python3
    Memory 23.44 MB Beats 98.11% of users with Python3
    """
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        """
        time complexity O(N) with space complexity O(1) solution 
        """
        N = len(nums)
        sol = [1 for _ in range(N + 1)] # 잉여 1을 뒤에 추가함
        # sol을 오른쪽에서부터 자라나는 누적곱 배열로 만든다.
        for i in range(N-1, -1, -1):
            sol[i] = sol[i + 1] * nums[i]
        
        # 왼쪽에서부터 이동하며 진짜 sol[i] 값을 구한다.
        acc = 1
        for i in range(N):
            sol[i] = sol[i + 1] * acc
            acc *= nums[i]

        sol.pop() # remove 잉여 1
        return sol