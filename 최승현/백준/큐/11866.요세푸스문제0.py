"""
http://boj.kr/11866
"""

from collections.abc import Generator
from collections import deque


def main(n, k) -> Generator[int, None, None]:
    """
    N 명의 사람이 원형으로 앉아있고 매번 K 번째 사람을 제거하였을 때
    사람이 제거된 순서를 (N,K) 요세푸스 순열이라고 한다.

    이 요세푸스 순열을 반환하라.
    """
    # 1. 큐 만들기
    q = deque(range(1, n + 1))

    # 4. 한 사람이 남을 때까지 반복한다.
    while len(q) > 1:
        # 2. K-1번 큐에서 POP & PUSH 한다. 이 사람들은 자신의 차례가 아니다.
        for _ in range(k - 1):
            popped = q.popleft()
            q.append(popped)

        # 3. 큐에서 한 명을 POP하고 그 결과를 요세푸스 순열의 뒤에 추가한다.
        yield q.popleft()
    
    # 5. 마지막 남은 한 사람을 요세푸스 순열의 뒤에 추가한다.
    yield q[0]



if __name__ == "__main__":
    n, k = map(int, input().split())
    print(f"<{', '.join(map(str, main(n, k)))}>")
