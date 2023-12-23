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
