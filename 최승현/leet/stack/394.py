"""
https://leetcode.com/problems/decode-string
"""

from typing import List


class Solution1:
    def decodeString(self, s: str) -> str:
        stack: List[str] = []
        counts: List[int] = []

        i, j = 0, 0
        while j < len(s) and s[j].isalpha():
            # 제일 앞에 글자를 먼저 추가한다.
            j += 1
        if j > 0:
            stack.append(s[i:j])
            counts.append(1)
            i = j
        else:
            stack.append("")
            counts.append(1)

        # k[str]...

        while j < len(s):
            if s[j].isalpha():
                # 오른쪽에 단순 문자열
                break
            while s[j] != "[":
                # collect numbers
                j += 1

            # stack push!

            k = int(s[i:j])
            j += 1
            i = j

            while s[j].isalpha():
                j += 1
            stack.append(s[i:j])
            counts.append(k)

            # 괄호가 닫힐 수도 있고, 숫자가 나올 수도 있다.
            while j < len(s) and s[j] == "]":
                # stack.top에 있는 문자열을 pop하여 k번 곱한다. 다음 stack.top에 이어붙인다.
                top = stack.pop()
                k = counts.pop()
                stack[-1] += top * k
                j += 1
            i = j

        if j < len(s):
            # 뒤에 단순 문자열이 남아있는 경우
            stack.append(s[j:])
        return "".join(stack)


class Solution2:
    def decodeString(self, s: str) -> str:
        def decode_recursive(s: str) -> str:
            """
            abc123[def...qwv]xyz...
               |  |         |
               |  |         └-- closebra
               |  └------------ openbra
               └--------------- i
            """
            openbra = s.find("[")
            if openbra < 0:
                return s

            # 숫자가 나오기 전 문자열을 제쳐둔다.
            i = 0
            while s[i].isalpha():
                i += 1
            left_str = s[:i]

            # 가장 바깥쪽 right bracket은 top 정수형으로 찾는다.
            top = 1
            closebra = openbra + 1
            for j in range(openbra + 1, len(s)):
                if s[j] == "[":
                    top += 1
                elif s[j] == "]":
                    top -= 1
                if top == 0:
                    closebra = j
                    break

            # 난 처음 만난 대괄호쌍만 신경쓴다. 오른쪽에 나타나는 문자열은 개별적으로 처리한다.
            right_str = decode_recursive(s[closebra + 1 :])

            k = int(s[i:openbra])
            inner_str = decode_recursive(s[openbra + 1 : closebra])

            return left_str + (inner_str * k) + right_str

        # enddef

        return decode_recursive(s)


if __name__ == "__main__":
    s = Solution2()

    print(s.decodeString("3[a]2[bc]"))
    print(s.decodeString("3[a2[c]]"))
    print(s.decodeString("2[abc]3[cd]ef"))
    print(s.decodeString("zzz2[abc]3[cd]ef"))
    print(s.decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef"))
