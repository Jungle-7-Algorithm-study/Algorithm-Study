"""
https://leetcode.com/problems/reorder-data-in-log-files/

1. letter logs ➡️ digit logs
2. in letter logs,
    1. contents 기준 정렬
    2. id 기준 정렬
3. in digit logs... contents 순서 유지
"""

from typing import List


class Solution:
    def reorderLogFiles(self, logs: List[str]) -> List[str]:
        ret = []
        visited = [False for _ in range(len(logs))]

        # 조건1. letter logs > digit logs
        for i, log in enumerate(logs):
            if log.split()[1].isalpha():
                visited[i] = True
                ret.append(log)

        # 조건2. in letter logs, sort by contents, if equal, sort by id
        ret.sort(key=lambda x: (x.split()[1:], x.split()[0]))

        # 조건3. digit logs remains inserted order
        for i in range(len(logs)):
            if not visited[i]:
                ret.append(logs[i])

        return ret


if __name__ == "__main__":
    logs = [
        "dig1 8 1 5 1",
        "let1 art can",
        "dig2 3 6",
        "let2 own kit dig",
        "let3 art zero",
    ]
    expected = [
        "let1 art can",
        "let3 art zero",
        "let2 own kit dig",
        "dig1 8 1 5 1",
        "dig2 3 6",
    ]

    answer = Solution().reorderLogFiles(logs)

    print(answer)

    assert answer == expected
