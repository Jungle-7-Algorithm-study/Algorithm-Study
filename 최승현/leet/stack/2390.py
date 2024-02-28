"""
https://leetcode.com/problems/removing-stars-from-a-string
"""


class Solution:
    def removeStars(self, s: str) -> str:
        buffer = []

        for c in s:
            if c == "*":
                # pop
                buffer.pop()
            else:
                buffer.append(c)

        return "".join(buffer)


if __name__ == "__main__":
    s = Solution()

    print(s.removeStars("leet**cod*e"))
