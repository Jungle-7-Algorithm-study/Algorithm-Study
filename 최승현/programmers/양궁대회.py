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


def dfs2(
    arrow: int, index: int, res: List[int], info: List[int], fn: Callable[[List[int], int], None]
) -> None:
    """
    i 번째 과녁에서 라이언이 승리하였는가?

    arrow: 남은 화살의 개수
    info: 어피치의 사격성적

    O(2 ** 11) 의 시간복잡도를 가짐
    """
    N = len(res)
    if arrow < 0:
        # 불가능
        return
    if index == N:
        # 화살 개수가 남아있을 수 있음!
        fn(res, arrow)
        return

    # 실패
    dfs2(arrow, index + 1, res, info, fn)

    # 승리
    amt = info[index] + 1
    res[index] = amt
    dfs2(arrow - amt, index + 1, res, info, fn)

    res[index] = 0


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


def solution2(n, info: List[int]):
    maximum = 0
    answer = [0] * 11

    def each_case(ryan: List[int], arrow: int) -> None:
        nonlocal answer, maximum

        if arrow:
            # 화살을 덜 쐈다.
            ryan[-1] += arrow

        # 화살을 다 쐈다.
        compared = compare(ryan, info)
        if maximum < compared:
            maximum = compared
            answer = ryan[:]
        elif maximum == compared and less(answer, ryan):
            answer = ryan[:]

    dfs2(n, 0, [0 for _ in range(11)], info, each_case)

    if maximum == 0:
        return [-1]
    return answer


if __name__ == "__main__":
    solution = solution2
    dfs2(3, 0, [0, 0, 0], [2, 1, 0], print)
    print(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]))
    print(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
    print(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]))
    print(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3]))
