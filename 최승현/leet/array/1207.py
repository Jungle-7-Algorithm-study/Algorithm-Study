"""
https://leetcode.com/problems/unique-number-of-occurrences
"""
from typing import List


def normalize(num: int) -> int:
    """
    [-1000, 1000] => [0, 2000]
    """
    return num + 1000


class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        counter = [0 for _ in range(2001)]
        for elem in arr:
            counter[normalize(elem)] += 1
        
        # unique occurences
        unique_checker = [False for _ in range(1001)]
        for cnt in counter:
            if cnt == 0:
                continue
            if unique_checker[cnt]:
                return False
            unique_checker[cnt] = True
        
        return True
        
