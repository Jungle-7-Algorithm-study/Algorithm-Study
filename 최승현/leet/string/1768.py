"""
https://leetcode.com/problems/merge-strings-alternately/

w1: c11 c12 c13 ... c1k
w2: c21 c22 c23 ... c2l

if k < l:
    merged string: c11 c21 c12 c22 c13 c23 ... c1k c2k c2k+1 ... c2l
"""
class Solution:
    def mergeAlternately(self, w1: str, w2: str) -> str:
        res = []

        l1 = len(w1)
        l2 = len(w2)

        for i in range(max(l1, l2)):
            if i < l1:
                res.append(w1[i])
            if i < l2:
                res.append(w2[i])

        return "".join(res)


        

w1 = "ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅍㅌㅎ"
w2 = "abcdefg"

res = []

l1 = len(w1)
l2 = len(w2)

for i in range(max(l1, l2)):
    if i < l1:
        res.append(w1[i])
    if i < l2:
        res.append(w2[i])

res = "".join(res)
print(res)
