"""
https://leetcode.com/problems/can-place-flowers
"""

from typing import List


def maximise_flower(zeros: int) -> int:
    if zeros % 2 == 0:
        return zeros // 2
    return zeros // 2 + 1


class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        """
        인접하지 않게 현재 flowerbed에 n개의 꽃을 더 심을 수 있는지 여부를 판단

        f([10001], 1) => True
        f([10001], 2) => False

        연속된 0들에 최대로 많은 양의 꽃을 우겨심어봤을 때 n보다 많은 수의 꽃을 심을 수 있는지 여부만 판단하면 되는거 아닌가
        [10001]은 [1x0x1]가 되고, [1001000100001]은 [1xx1x0x1x00x1]
        00 => 1
        000 => 2
        0000 => 2
        00000 => 3
        ...
        0가 2*i + 1개 있으면 => i + 1
        0가 2*i개 있으면 =====> i
        """
        if n == 0:
            return True
        if flowerbed == [0] and n <= 1:
            return True
        if flowerbed == [1]:
            return False

        # 초기 심겨진 꽃들에 의해 심을 수 없는 구역을 계산
        if flowerbed[0] == 1:
            flowerbed[1] = -1
        if flowerbed[-1] == 1:
            flowerbed[-2] = -1
        for i in range(1, len(flowerbed) - 1):
            if flowerbed[i] == 1:
                flowerbed[i - 1] = flowerbed[i + 1] = -1

        # 연속배치된 0의 수에 따라서 해당 구간에서 심을 수 있는 최대 개수의 꽃을 구한다
        zeros = 0
        total = 0
        for f in flowerbed:
            if f != 0:
                total += maximise_flower(zeros)
                if total >= n:
                    return True
                zeros = 0
                continue
            zeros += 1

        if zeros > 0:
            total += maximise_flower(zeros)
            if total >= n:
                return True
        return False
