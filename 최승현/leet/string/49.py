"""
https://leetcode.com/problems/group-anagrams

애너그램은 문자를 재배치해서 만들 수 있는 단어 혹은 구이다.

"""
from typing import List
from collections import Counter, defaultdict


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        """
        str -> [ ord(c) for c in str ] -> sort -> str -> dict에 있으면 해당 str을 집어넣고 없으면 그 str이 key가 되고 첫번째 item이 되는겨
        리턴할땐 key, value모두 묶어 하나의 List로 뽑아내기

        215ms, 20.18MB
        """
        anagrams: dict[str, List[str]] = {}

        for s in strs:
            converted = sorted(ord(c) for c in s)
            s_ = "".join(chr(i) for i in converted)
            if anagrams.get(s_) is None:
                anagrams[s_] = [s]
            else:
                anagrams[s_].append(s)

        return list(anagrams.values())


class Solution2:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        """
        Solution1은 통과하기는 하지만 처참한 런타임 속도를 보여준다. (215ms) (https://imgur.com/j9kjnrD)
        그래서 이번엔 정렬하지 않고 그 단어가 가지고 있는 문자의 개수만 카운트한다.

        예를 들어 "abc"는 (1,1,1,0,0,0...) 인 셈. 이 튜플을 dict의 key로 활용하는 거다!

        203ms, 22.3MB
        """
        anagrams: dict[tuple, list[str]] = defaultdict(list)

        for s in strs:
            tmp_ls = [0 for _ in range(26)]
            counter = Counter(s)
            for c, cnt in counter.items():
                idx = ord(c) - ord("a")
                tmp_ls[idx] = cnt

            anagrams[tuple(tmp_ls)].append(s)

        return list(anagrams.values())


class Solution3:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        """
        교재 파이썬 알고리즘 인터뷰에 있는 코드
        Solution1의 단순한 버전. str을 그대로 sort할 수 있다고!

        172ms 20.5MB 아 그래도 하위권이네
        """
        anagrams: dict[str, List[str]] = defaultdict(list)
        for s in strs:
            anagrams["".join(sorted(s))].append(s)
        return list(anagrams.values())


class Solution2_1:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        """
        Solution2의 Counter를 없애보자

        198ms 22.27MB 💀
        """
        anagrams: dict[tuple, list[str]] = defaultdict(list)

        for s in strs:
            cnt = [0 for _ in range(26)]
            for c in s:
                cnt[ord(c) - ord("a")] += 1

            anagrams[tuple(cnt)].append(s)

        return list(anagrams.values())
