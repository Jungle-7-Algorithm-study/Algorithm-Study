"""
http://boj.kr/2812
"""

from collections.abc import Sequence


def main(n: Sequence[str], k: int) -> Sequence[str]:
    """
    n: N자리 숫자를 가장 큰 자릿수부터 채워놓은 수열
    returns: n에서 숫자 k개를 지워 얻을 수 있는 가장 큰 수를 구하라
    """
    stack = [n[0]]

    for i, dig in enumerate(n[1:], 1):
        while (
            len(stack) > 0 #
            and len(stack) + k - i > 0  # 남은 숫자의 개수
            and stack[-1] < dig  #
        ):
            stack.pop()
        stack.append(dig)

    return stack[:len(n) - k]


if __name__ == "__main__":
    N, K = map(int, input().split())
    n = input()
    print("".join(main(n, K)))
