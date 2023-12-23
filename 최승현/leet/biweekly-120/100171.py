from typing import List


class Solution:
    def strictly_increasing(self, subarr: list) -> bool:
        for i in range(1, len(subarr)):
            if subarr[i - 1] >= subarr[i]:
                return False
        return True

    def incremovableSubarrayCount(self, nums: List[int]) -> int:
        print()
        ret = 1
        for len_sub in range(1, len(nums)):
            for s in range(len(nums) - len_sub + 1): 
                e = s + len_sub # exclusive
                if not self.strictly_increasing(nums[:s] + nums[e:]):
                    continue
                print(f"{nums[s:e]} is incremovable of nums")
                ret += 1
        return ret