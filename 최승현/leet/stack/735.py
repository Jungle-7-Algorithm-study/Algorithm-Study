"""
https://leetcode.com/problems/asteroid-collision
"""

from typing import List


class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []

        for e in asteroids:
            if not stack:
                stack.append(e)
                continue
            if e > 0:
                stack.append(e)
            elif e < 0:
                if not stack or stack[-1] < 0:
                    # nobody explodes, append it.
                    stack.append(e)
                    continue

                while stack and stack[-1] > 0 and stack[-1] < abs(e):
                    stack.pop()

                if not stack or stack[-1] < 0:
                    # no explosion
                    stack.append(e)
                else:
                    if stack[-1] == abs(e):
                        # both explode 💥
                        stack.pop()
                    elif stack[-1] > abs(e):
                        # e explodes 💥
                        continue

        return stack


if __name__ == "__main__":
    s = Solution()

    print(s.asteroidCollision([5, 10, -5]))
    print(s.asteroidCollision([8, -8]))
    print(s.asteroidCollision([10, 2, -5]))
    print(s.asteroidCollision([-2, -2, 1, -2]))
    print(s.asteroidCollision([1, -2, -2, -2]))
