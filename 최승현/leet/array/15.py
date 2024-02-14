"""
https://leetcode.com/problems/3sum/
"""

from typing import List


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        """
        i != j != k and sum(nums[i], nums[j], nums[k]) == 0

        결과: Time Limit Exceed ⌛️
        """
        N = len(nums)
        nums.sort()

        res = set()
        for i in range(N - 2):
            for j in range(i + 1, N - 1):
                for k in range(j + 1, N):
                    if nums[i] + nums[j] + nums[k] == 0:
                        res.add((nums[i], nums[j], nums[k]))

        return [list(tup) for tup in res]


from bisect import bisect_left


class Solution2:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        """
        i, j는 양쪽에서 출발하고, k는 bisect를 사용하여 [k] = - ([i] + [j])를 만족하는 k를 찾도록 만들어야 한다.
        그렇게 했을 때 시간복잡도는 N ** 2 * log(N)이 된다. N = 3000이므로 103956721.06844918 ~= 1억

        결과:

        Runtime 2140 ms Beats 9.57% of users with Python3 💀💀💀💀💀💀💀💀💀💀💀
        Memory 20.36 MB Beats 93.20% of users with Python3 👑👑👑👑👑👑👑👑👑👑
        """
        N = len(nums)
        nums.sort()

        res = []

        for i in range(N - 2):
            if i > 0 and nums[i] == nums[i - 1]:
                continue  # 중복된 값 건너뛰기

            for j in range(N - 1, i + 1, -1):
                if j < N - 1 and nums[j] == nums[j + 1]:
                    continue  # 중복된 값 건너뛰기

                # -([i] + [j]) 와 일치하는 값이 구간 (i, j) 안에 존재하는가?
                target = -(nums[i] + nums[j])

                k = bisect_left(nums, target, lo=i + 1, hi=j - 1)
                if nums[k] != target:
                    continue  # no exists!
                # exists!
                res.append([nums[i], nums[j], nums[k]])

        return res


class Solution3:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        """
        교재해설 참조함. Two Pointer 문제로 O(N ** 2)로 풀 수 있다.

        결과

        Runtime 717 ms Beats 56.15% of users with Python3 🐐🐐🐐🐐🐐🐐🐐
        Memory 20.70 MB Beats 70.70% of users with Python3 🐐🐐🐐🐐🐐🐐🐐
        """
        N = len(nums)
        nums.sort()

        res = []

        for i in range(N - 2):
            if i > 0 and nums[i] == nums[i - 1]:
                continue  # 중복된 값 건너뛰기

            l, r = i + 1, N - 1

            while l < r:

                summation = nums[i] + nums[l] + nums[r]

                if summation == 0:
                    res.append([nums[i], nums[l], nums[r]])

                    while l < r and nums[l] == nums[l + 1]:
                        # 중복된 값 건너뛰기
                        l += 1
                    while l < r and nums[r] == nums[r - 1]:
                        # 중복된 값 건너뛰기
                        r -= 1
                    l += 1
                    r -= 1

                elif summation > 0:
                    r -= 1
                else:
                    l += 1

        return res


if __name__ == "__main__":
    s = Solution3()
    print(s.threeSum([-1, 0, 1, 2, -1, -4]))
    print(s.threeSum([0, 1, 1]))
    print(s.threeSum([0, 0, 0]))
    print(s.threeSum([-2, 0, 0, 2, 2]))
