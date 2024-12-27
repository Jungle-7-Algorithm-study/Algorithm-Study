"""
http://boj.kr/1074

계산이 잘 안 맞을땐 표를 세워가며 n 값을 하나씩 늘려가며
변수들의 값을 계산해보는 습관을 가져보자. 한 번 말리니까
끝도 없이 시간이 흘러갔다.

| n | size of array | size of part |
| - | ------------- | ------------ |
| 1 | 4             | 1            |
| 2 | 16            | 4            |
| 3 | 64            | 16           |
| k | 2 ** (2 * k)  | 2**(2*(k-1)) |
"""


def bound_idx(n: int, r: int, c: int) -> int:
    """
    0 1
    2 3
    """
    m = n - 1
    if r < 2**m and c < 2**m:
        return 0
    if r < 2**m and c >= 2**m:
        return 1
    if c < 2**m and r >= 2**m:
        return 2
    return 3


def order_of(n: int, bound_idx: int) -> int:
    """
    사분면 하나의 크기는 2**2n / 4 이기 때문에
    2 ** (2 * (n - 1)) 이라는 공식이 나왔다.
    """
    return bound_idx * (2 ** (2 * (n - 1)))


def normalize(n: int, r: int, c: int) -> tuple[int, int]:
    """
    normalize current position (r, c) into range([[0, 2**(n-1)], 2**(n-1)])
    """
    m = n - 1
    next_r = r if r < 2**m else r - 2**m
    next_c = c if c < 2**m else c - 2**m

    return (next_r, next_c)


def main(n: int, r: int, c: int) -> int:
    """
    2**n BY 2**n 배열에서 재귀Z 모양으로 방문할 때 r,c 를 몇번째에
    방문하는가?
    """
    bound = bound_idx(n, r, c)

    if n == 0:
        return 0

    order = order_of(n, bound)
    next_r, next_c = normalize(n, r, c)

    order += main(n - 1, next_r, next_c)

    return order


if __name__ == "__main__":
    n, r, c = map(int, input().split())
    print(main(n, r, c))
