"""
https://leetcode.com/problems/most-common-word/
"""


import re
from typing import List
from collections import Counter


class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        banned = [x.lower() for x in banned]
        filtered = re.split(r"[ \!\?\'\,\;\.]", paragraph.lower())
        filtered = filter(lambda x: x and not x in banned, filtered)
        counter = Counter(filtered)
        print(counter)
        return counter.most_common()[0][0]


class Solution2:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        words = [
            w
            for w in re.sub(r"[^\w]", " ", paragraph).lower().split()
            if w not in banned
        ]
        counter = Counter(words)
        return counter.most_common()[0][0]
