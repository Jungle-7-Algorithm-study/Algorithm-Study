"""
https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length
"""


class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        """
        결과: Time Limit Exceed 💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀

        인풋의 길이가 최대 10 ^ 5라서 제곱으로 풀면 안되는 큰 뜻을 가지고 있는 문제였구나
        """
        VOWELS = {"a", "e", "i", "o", "u"}

        result = 0
        for l in range(len(s) - k + 1):
            r = l + k
            cnt = 0
            for c in s[l:r]:
                if c in VOWELS:
                    cnt += 1
            result = max(result, cnt)

        return result


class Solution2:
    def maxVowels(self, s: str, k: int) -> int:
        """
        윈도우를 한 칸 옮길 때마다 버리는 l과 새 r을 검사해서 윈도우 안에 들어온 모음의 개수를 센다.
        """
        VOWELS = {"a", "e", "i", "o", "u"}

        l, r = 0, k
        cnt = 0
        for c in s[l:r]:
            # initial
            if c in VOWELS:
                cnt += 1

        result = cnt

        while r < len(s):
            if s[l] in VOWELS:
                cnt -= 1
            l += 1
            if s[r] in VOWELS:
                cnt += 1
            r += 1
            result = max(result, cnt)

        return result


if __name__ == "__main__":
    s = Solution2()

    print(s.maxVowels("abciiidef", 3))
