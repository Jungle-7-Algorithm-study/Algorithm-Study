"""
http://boj.kr/1629

[Modular Exponential](https://en.wikipedia.org/wiki/Modular_exponentiation) 참고

(ab) mod m = ((a mod m)(b mod m)) mod m

위의 공식을 응용하면 b**e mod m을 아래와 같이 쪼개가면서 풀 수 있게된다:

e_ = 1 => c1 = b ** 1 mod m
e_ = 2 => c2 = (c1 * b) mod m
e_ = 3 => c3 = (c2 * b) mod m

TIMEOUT

이유: b가 너무 크다, INTMAX이므로 1초를 넘어간다. => Log로 줄여야 한다.
"""

def main(b, e, m) -> int:
    """
    b: base
    e: exponent
    m: modulus
    """
    if m == 1:
        return 0

    c = 1
    for e_ in range(e):
        c = (c * b) % m

    return c


if __name__ == "__main__":
    a, b, c = map(int, input().split())
    print(main(a, b, c))



