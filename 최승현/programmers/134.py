"""
https://leetcode.com/problems/gas-station

1. 완탐 => TLE
2. SUM gas > SUM cost => -1
    _ => 한 바퀴를 돌 수 있는 주유소 번호
"""

from typing import List


class Solution:
    """
    완탐방식 => TLE
    """

    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        N = len(gas)
        for start in range(N):
            # start ~ (start + N) % N까지 직접 움직이며 가능한지 여부를 판단한다
            tank = 0
            success = True

            for count in range(N):
                index = (start + count) % N

                tank += gas[index]
                if tank < cost[index]:
                    # 실패
                    success = False
                    break
                tank -= cost[index]

            if success:
                return start

        return -1


from heapq import *


class Solution2:
    """
    cost를 기준으로 정렬(인덱스 포함)하고 그 인덱스서부터 각각 gas의 누적합과 cost의 누적합을
    계산해가다가 cost의 누적합이 gas 누적합을 넘어서면 해당 케이스는 실패한 것으로 간주

    결과: TLE
    Solution1과 같은 테케에서 터졌넹
    """

    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        N = len(gas)
        sumgas = 0
        sumcost = 0
        mincost = 1 << 30
        cost_sorted = []  # tuple[value, index]

        for i in range(N):
            sumgas += gas[i]
            sumcost += cost[i]
            if cost[i] < mincost:
                mincost = cost[i]
            heappush(cost_sorted, (cost[i], i))

        if sumgas < sumcost:
            return -1

        # guaranteed to be exists a unique solution
        # 낮은 코스트부터 출발해볼까?
        while cost_sorted:
            start_cost, start_index = heappop(cost_sorted)
            success = True

            gassum = 0
            costsum = 0

            for count in range(N):
                index = (start_index + count) % N
                gassum += gas[index]
                costsum += cost[index]
                if gassum < costsum:
                    success = False
                    break
            if success:
                return start_index

        return -1


class Solution3:
    """
    정답이 복수개가 아님이 보장되므로, 성립되지 않는 지점이 있다면 그 앞은 무조건 출발점이 될 수 없다.
    => 성립이 안되는 경우 맨 뒤로 밀어버린다.
    """

    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        if sum(gas) < sum(cost):
            return -1

        start = 0
        tank = 0

        for i in range(len(gas)):
            if gas[i] + tank < cost[i]:
                # 출발점이 될 수 없다. 출발지점 초기화
                start = i + 1
                tank = 0
            else:
                tank += gas[i] - cost[i]
        return start
