"""
https://leetcode.com/problems/valid-palindrome/
Valid Palindrome
"""


class Solution:
    def isPalindrome(self, s: str) -> bool:
        ls = []
        for c in s:
            if c.isalnum():
                ls.append(c.lower())
        return ls == ls[::-1]


import re


class Solution2:
    def isPalindrome(self, s: str) -> bool:
        s = s.lower()
        s = re.sub(r"[^a-z0-9]", "", s)
        return s == s[::-1]
