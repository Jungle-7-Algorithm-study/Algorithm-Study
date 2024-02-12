from typing import List


class Solution:
    def compress(self, chars: List[str]) -> int:
        """
        chars: out param, should be storing compressed string
        return: length of compressed string
        """
        N = len(chars)
        chars.extend("0" for _ in range(2001 - N))
        r = 0  # read cursor
        w = 0  # write cursor

        while r < N:
            sample = chars[r]
            chars[w] = sample
            w += 1

            cnt = 0
            while r < N and sample == chars[r]:
                r += 1
                cnt += 1

            if cnt > 1:
                for digit in str(cnt):
                    chars[w] = digit
                    w += 1

        return w


if __name__ == "__main__":
    s = Solution()

    chars = list("aabbccc")
    l = s.compress(chars)
    print(chars[:l])
