"""
https://leetcode.com/contest/weekly-contest-378/problems/find-longest-special-substring-that-occurs-thrice-ii/
"""
from collections import defaultdict


def is_special(s: str) -> bool:
    c1 = s[0]
    for ci in s:
        if ci != c1:
            return False
    return True


class Solution:
    def maximumLength(self, s: str) -> int:
        specials: dict[str, int] = defaultdict(int)

        for l in range(len(s) - 1, 0, -1):
            for i in range(len(s) - l + 1):
                sub = s[i : i + l]
                if is_special(sub):
                    specials[sub] += 1
                    if specials[sub] >= 3:
                        return l

        return -1


if __name__ == "__main__":
    testcases = ["aaaa", "abcdef", "abcaba"]
    s = Solution()

    for tc in testcases:
        answer = s.maximumLength(tc)
        print(answer)
