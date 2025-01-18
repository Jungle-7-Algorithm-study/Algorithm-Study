"""
http://boj.kr/18258
"""

from collections.abc import Iterable
from sys import stdin


def input() -> str:
    return stdin.readline().strip()


class MyQueue:
    MAXQUEUE = 2_000_000
    _circular_queue: list[int] = [0] * MAXQUEUE
    _head = 0
    _tail = 0

    def __len__(self) -> int:
        if self._tail < self._head:
            return MyQueue.MAXQUEUE - self._head + self._tail
        return self._tail - self._head

    def empty(self) -> bool:
        return len(self) == 0

    def front(self) -> int | None:
        if self.empty():
            return None
        return self._circular_queue[self._head]

    def back(self) -> int | None:
        if self.empty():
            return None
        return self._circular_queue[self._tail - 1]

    def push(self, val: int):
        self._circular_queue[self._tail] = val
        self._tail = (self._tail + 1) % self.MAXQUEUE

    def pop(self) -> int | None:
        if self.empty():
            return None

        result = self._circular_queue[self._head]
        self._head = (self._head + 1) % self.MAXQUEUE

        return result


def main(commands: Iterable[list]):
    my_queue = MyQueue()

    for cmd in commands:
        match cmd[0]:
            case "push":
                my_queue.push(int(cmd[1]))

            case "pop":
                result = my_queue.pop()
                print(result if result else -1)

            case "size":
                print(len(my_queue))

            case "empty":
                print(1 if my_queue.empty() else 0)

            case "front":
                print(my_queue.front() if my_queue.front() is not None else -1)

            case "back":
                print(my_queue.back() if my_queue.back() is not None else -1)


if __name__ == "__main__":
    n = int(input())
    main(input().split() for _ in range(n))
