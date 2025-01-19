"""
http://boj.kr/1655
"""

from collections.abc import Generator, Iterable
from heapq import heappop, heappush
from sys import stdin


def input() -> str:
    return stdin.readline().strip()


class MinHeap:
    __heap: list[int] = []

    def top(self) -> int:
        return self.__heap[0]

    def push(self, val):
        heappush(self.__heap, val)

    def pop(self) -> int:
        return heappop(self.__heap)

    def __len__(self) -> int:
        return len(self.__heap)

    def __bool__(self) -> bool:
        return len(self) > 0


class MaxHeap:
    __heap: list[int] = []

    def top(self) -> int:
        return -self.__heap[0]

    def push(self, val):
        heappush(self.__heap, -val)

    def pop(self) -> int:
        return -heappop(self.__heap)

    def __len__(self) -> int:
        return len(self.__heap)

    def __bool__(self) -> bool:
        return len(self) > 0


def main(vals: Iterable[int]) -> Generator[int, None, None]:
    left_heap = MaxHeap()
    right_heap = MinHeap()

    for val in vals:
        if len(left_heap) == len(right_heap):
            left_heap.push(val)
        else:
            right_heap.push(val)

        # 중앙값 교정
        if right_heap and left_heap.top() > right_heap.top():
            right_heap.push(left_heap.pop())
            left_heap.push(right_heap.pop())

        yield left_heap.top()


if __name__ == "__main__":
    n = int(input())
    gen = (int(input()) for _ in range(n))

    for i in main(gen):
        print(i)
