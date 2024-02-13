from copy import copy
from typing import Callable, List


def dfs(n: int, res: List[int], fn: Callable[[List[int]], None]) -> None:
    if n == 0:
        fn(res)
        return
    for i in range(11):
        res[i] += 1
        dfs(n - 1, res, fn)
        res[i] -= 1


def compare(lhs: List[int], rhs: List[int]) -> int:
    """
    lhs - rhs의 결과를 리턴한다. 문제의 규칙에 따라 lhs가 라이언, rhs가 어피치

    i번째 인덱스에 한하여 lhs[i] > rhs[i] 라면 10 - i 점을 추가하고
    lhs[i] <= rhs[i] 라면 10 - i점을 뺍니다.
    """
    res = 0

    for i in range(11):
        if lhs[i] == 0 and rhs[i] == 0:
            continue
        if lhs[i] > rhs[i]:
            res += 10 - i
        else:
            res -= 10 - i

    return res


def less(lhs: List[int], rhs: List[int]) -> bool:
    """
    가장 낮은 점수를 더 많이 맞힌 경우가 더 크다. 예를 들어
    [0,0,2,3,4,1,0,0,0,0,0]과
    [9,0,0,0,0,0,0,0,1,0,0]를 비교하면
    [9,0,0,0,0,0,0,0,1,0,0]가 더 크기 때문에 True를 리턴해야함.
    """
    for i in range(10, -1, -1):
        if lhs[i] < rhs[i]:
            return True
        elif lhs[i] > rhs[i]:
            return False
    return False


def solution(n, info: List[int]):
    maximum = 0
    answer = [0] * 11

    def each_case(ls: List[int]):
        nonlocal maximum, answer
        compared = compare(ls, info)

        # print(f"{ls} - {info} = {compared}")

        if maximum < compared:
            maximum = compared
            answer = copy(ls)
        elif maximum == compared and less(answer, ls):
            answer = copy(ls)

    dfs(n, [0] * 11, each_case)

    if maximum == 0:
        return [-1]

    return answer


if __name__ == "__main__":
    # print(compare([0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]))
    print(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]))
    print(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
    print(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]))
