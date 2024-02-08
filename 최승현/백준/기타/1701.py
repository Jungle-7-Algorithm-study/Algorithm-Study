"""
Cubeditor

https://www.acmicpc.net/problem/1701

최적화 문제 → 결정문제로 바꾸는 몇가지 방법

1. DP
2. 이분탐색
3. 그리디

이분탐색으로 문제를 풀어봐야쓰겄다
"""

from typing import Callable


def first_false(N: int, predicate: Callable) -> int:
    """
    TTTTTTFFFFFF
          ^
    """
    l = 0
    r = N

    while l < r:
        m = l + ((r - l) // 2)
        if predicate(m):
            # go right
            l = m + 1
        else:
            # go left
            r = m
    return l


def can_search(s: str, l: int) -> bool:
    """
    s 안에서 길이 l짜리 부분문자열이 **두 번** 이상 나오는가?
    """
    for start in range(len(s) - l + 1):
        if s[start : start + l] in s[start + 1:]:
            return True
    return False


if __name__ == "__main__":
    string = input()
    answer = first_false(len(string), lambda l: can_search(string, l)) - 1  # last true를 찾아야 하기 때문
    print(answer)
