"""
https://leetcode.com/problems/greatest-common-divisor-of-strings
"""


def can_divide(dividend: str, divisor: str) -> bool:
    l1, l2 = len(dividend), len(divisor)
    if l1 % l2 != 0:
        return False
    for start in range(0, l1, l2):
        substr = dividend[start : start + l2]
        if substr != divisor:
            return False

    return True


class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        if len(str1) < len(str2):
            str1, str2 = str2, str1

        l1 = len(str1)
        frac = 1

        while l1 // frac > 0:
            if l1 % frac == 0:
                divisor = str1[: l1 // frac]
                if can_divide(str1, divisor) and can_divide(str2, divisor):
                    return divisor
            frac += 1

        return ""


if __name__ == "__main__":
    print(Solution().gcdOfStrings("ABCABC", "ABC"))