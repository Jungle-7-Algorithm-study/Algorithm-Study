"""
# weekly-contest-378

https://leetcode.com/contest/weekly-contest-378/problems/check-if-bitwise-or-has-trailing-zeros/ 

"""

from typing import List


class Solution:
    def hasTrailingZeros(self, nums: List[int]) -> bool:
        """
        최소 두개의 짝수만 존재하면 된다.
        """
        even_cnt = 0

        for n in nums:
            if n & 1 == 0:
                even_cnt += 1
                if even_cnt >= 2:
                    return True

        return False
