"""
https://leetcode.com/problems/smallest-number-in-infinite-set
"""

from typing import List


def p(x: int) -> int:
    """parent node from array binary tree"""
    if x == 0:
        return 0
    return (x - 1) >> 1


l = lambda x: (x << 1) | 1
r = lambda x: (x << 1) + 2


class SmallestInfiniteSet:
    """
    나만의 heapq를 직접 구현하여 푼 문제.
    역시 bubble up 보다는 bubble down이 난이도가 높았다.
    dict를 사용한 다른 풀이보다는 늦은 이유는 시간복잡도의 차이 때문이지 않을까?
    """

    def __init__(self):
        self.minheap: List[int] = [i for i in range(1, 1001)]

    def popSmallest(self) -> int:
        """
        1. [0] 원소를 리턴한다.
        2. 맨 뒤에 값을 [0]으로 올려놓는다
        3. heap 속성을 만족할때까지 bubble-down한다.
            이때 두 자식 중 더 작은 값과 비교하여 내려간다.
        """
        mh = self.minheap
        ret = mh[0]

        mh[0] = mh[-1]
        mh.pop()
        top = len(mh) - 1
        i = 0

        while l(i) <= top:
            next_index = l(i) if l(i) == top or mh[l(i)] < mh[r(i)] else r(i)

            # do bubble down
            if mh[i] > mh[next_index]:
                mh[i], mh[next_index] = mh[next_index], mh[i]
            else:
                break

            i = next_index

        return ret

    def addBack(self, num: int) -> None:
        """
        0. num이 minheap에 존재하지 않을 경우,
        1. 맨 뒤에 값을 추가한다.
        2. heap 속성을 만족할때까지 bubble-up 한다.
        """
        mh = self.minheap  # ref
        i = len(self.minheap)

        if num in mh:
            return

        mh.append(num)

        while i > 0 and mh[p(i)] > mh[i]:
            # 부모노드의 값이 자식노드의 값보다 항상 작아야 한다.
            mh[p(i)], mh[i] = mh[i], mh[p(i)]
            i = p(i)


# Your SmallestInfiniteSet object will be instantiated and called as such:
# obj = SmallestInfiniteSet()
# param_1 = obj.popSmallest()
# obj.addBack(num)
