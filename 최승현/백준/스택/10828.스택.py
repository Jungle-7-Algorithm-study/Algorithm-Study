"""
http://boj.kr/10828
"""

from sys import stdin
from typing import TypeVar


def input() -> str:
    return stdin.readline().strip()


T = TypeVar("T")


class MyStack[T]:
    _stack: list[T]

    def __init__(self):
        self._stack = []

    def push(self, x: T):
        self._stack.append(x)

    def pop(self) -> T | int:
        if self.empty():
            return -1
        return self._stack.pop()

    def size(self) -> int:
        return len(self)

    def __len__(self) -> int:
        return len(self._stack)

    def empty(self) -> bool:
        return len(self) == 0

    def top(self) -> T | int:
        if self.empty():
            return -1
        return self._stack[-1]


def exec(stack: MyStack[int], cmd: str) -> int | None:
    _cmd = cmd.split()

    match _cmd[0]:
        case "push":
            stack.push(int(_cmd[1]))

        case "pop":
            return stack.pop()

        case "size":
            return stack.size()

        case "empty":
            return 1 if stack.empty() else 0

        case "top":
            return stack.top()

    return None


if __name__ == "__main__":
    n = int(input())
    stack = MyStack[int]()

    for _ in range(n):
        output = exec(stack, input())
        if output is not None:
            print(output)
