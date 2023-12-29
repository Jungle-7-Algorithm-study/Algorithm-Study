"""
https://leetcode.com/problems/most-common-word/
"""


import re
from typing import Generator, List
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


class Solution3:
    def getSplit(self, s: str):
        word = ""
        for i in s.lower():
            if i not in "!?',;. ":
                word += i
            elif word:
                yield word
                word = ""
        if word:
            yield word

    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        counter = Counter(w for w in self.getSplit(paragraph) if w not in banned)
        return counter.most_common()[0][0]


class Solution4:
    """
    banned가 list였기 때문에 필터링에서 오랜 시간이 걸렸던 것이다. 따라서 이를 set으로 바꿔줬더니 90ms -> 38ms로 바뀌었다.
    """

    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        banned_set = set(banned)
        normalized = "".join(c.lower() if c.isalnum() else " " for c in paragraph)
        words = normalized.split()
        filtered = filter(lambda w: w and w not in banned_set, words)
        counter = Counter(filtered)
        return counter.most_common()[0][0]
