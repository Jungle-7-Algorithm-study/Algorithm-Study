"""
https://leetcode.com/problems/increasing-triplet-subsequence/
"""
from typing import List


class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        """
        time N, space 1 짜리 솔루션
        """
        left = float("inf")
        mid = float("inf")

        for n in nums:
            # left와 mid를 그때그때 갱신시켜도 되는 이유:
            # left가 mid보다 뒤에 갱신되어도 mid 존재 자체는 i < j에 대하여 [i] < [j]를
            # 만족함을 알리고 있기 때문!
            if mid < n:
                # l < m < n임이 보장이 되므로 참을 리턴한다.
                return True
            if left < n < mid:
                mid = n
            elif n < left:
                left = n

        # 순회가 종료되었으며, [i] < [j] < [k] 를 만족하는 triplet이 없음
        return False
