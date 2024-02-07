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
        if s[start : start + l] in s[start + 1 :]:
            return True
    return False


def solution(s: str) -> int:
    """
    이분탐색 (파라메트릭 서치) 활용한 풀이
    Memory: 38820KB
    Time: 1040ms
    """
    answer = first_false(len(s), lambda l: can_search(s, l))
    return answer - 1 if answer > 0 else 0


## KMP Algorithm으로 더 빠른 해결방법!


def fail_function(p: str):
    arr = [0 for _ in range(len(p))]

    j = 0
    for x in range(1, len(p)):
        while j > 0 and p[x] != p[j]:
            # 글자 불일치
            j = arr[j - 1]
        if p[x] == p[j]:
            # 글자 일치
            j += 1
            arr[x] = j

    return arr


def check_fail(p: str) -> int:
    arr = [0 for _ in range(len(p))]
    ret = 0

    j = 0
    for x in range(1, len(p)):
        while j > 0 and p[x] != p[j]:
            j = arr[j - 1]
        if p[x] == p[j]:
            j += 1
            arr[x] = j
            if ret < j:
                ret = j

    return ret


def solution2(s: str) -> int:
    """
    fail function만 구하면 끝난다고? 생각해 보니 중복되는 접두어의 길이를 의미했으니까
    접두어의 길이가 최대가 되게끔 만들면 그저 끝나는 거였잖아

    Memory: 31252KB
    Time: 2320ms 💀💀💀💀💀
    """
    ret = 0

    for start in range(len(s) - 1):
        ret = max(ret, check_fail(s[start:]))

    return ret


if __name__ == "__main__":
    string = input()
    print(solution2(string))
