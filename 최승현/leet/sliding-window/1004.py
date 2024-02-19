"""
https://leetcode.com/problems/max-consecutive-ones-iii

k개의 0을 1로 뒤집었을 때 구할 수 있는 가장 긴 길이의 연속된 1의 길이를 구하세용

input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
output: 6
explanation:  [1,1,1,0,0,1,1,1,1,1,1]
                         ^         ^
"""

from typing import List


class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        if k == 0:
            # 예외 케이스.
            cnt = 0
            result = 0

            for n in nums:
                if n == 0:
                    cnt = 0
                else:
                    cnt += 1
                    result = max(result, cnt)

            return result

        l, r = 0, 1  # inclusive l, exclusive r
        cnt = 0
        k_remain = k

        if nums[0]:
            cnt = 1
        else:
            cnt = 1
            k_remain -= 1

        result = cnt

        while r < len(nums) and l < r:
            match nums[l], nums[r], 0 < k_remain:
                case (_, 1, _):
                    cnt += 1
                    r += 1
                case (_, 0, True):
                    # 응 k 아직 남았어~
                    k_remain -= 1
                    cnt += 1
                    r += 1
                case (0, 0, False):
                    # k가 없넹.. 심지어 l도 빌린 놈이야
                    cnt -= 1
                    l += 1
                    k_remain += 1
                case (1, 0, False):
                    cnt -= 1
                    l += 1

            result = max(result, cnt)

        return result


if __name__ == "__main__":
    s = Solution()

    print(s.longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2))
    print(s.longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3))
    print(s.longestOnes([0], 1))
