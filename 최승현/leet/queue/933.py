"""
https://leetcode.com/problems/number-of-recent-calls/
"""

from collections import deque


class RecentCounter:
    """Counts the number of recent requests within a certain time frame"""

    def __init__(self):
        """
        Initializes the counter with zero recent requests
        """
        self.q = deque()

    def ping(self, t: int) -> int:
        """
        Adds a new request at time `t`, where `t` represents some time in milliseconds,
        and returns the number of requests that has happened in the past `3000` milliseconds
        (including the new request).

        그러니까, ping이 호출될 때마다 새 요청을 추가한다. t 만큼의 시간이 지나면 요청이 도착했다고 간주하는 것 같음.
        ping이 호출될 때마다 [t - 3000, t] 구간의 시간에 도착한 요청을 리턴해야 한다.

        ping이 호출될때마다 인자 t는 strictly increasing한다. 즉, 다음 t는 이전 t보다 무조건 크다는 말임.
        """
        self.q.append(t)

        while self.q[0] < t - 3000:
            self.q.popleft()

        return len(self.q)


# Your RecentCounter object will be instantiated and called as such:
# obj = RecentCounter()
# param_1 = obj.ping(t)

if __name__ == "__main__":
    obj = RecentCounter()

    inputs = [1, 100, 3001, 3002]

    for i in inputs:
        print(obj.ping(i))
