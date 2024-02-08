"""
https://leetcode.com/problems/reverse-string/
"""

s = list("abcde")
N = len(s)

for i in range(N // 2):
    tmp = s[i]
    s[i] = s[-1 - i]
    s[-1 - i] = tmp

s[:] = s[::-1]
