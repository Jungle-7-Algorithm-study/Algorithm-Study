"""
http://boj.kr/1629

나머지 지수승 (modular exponential)을 따라서 풀어보자

ab mod m = ((a mod m)(b mod m)) mod m 과 같다. 이걸 어디다 쓰냐고? 나도 몰랐다.

b ** e mod m == b ** (e의 이진전개) mod m 로 풀어낼 수 있고, 지수에서의 덧셈은 곱셈을 의미하니까 (b_1 * b_2 * b_3 * ...) mod m으로 표현할 수 있다. 이러면 로그시간으로 풀 수 있다.

"""
from math import log2, ceil

def main(b, e, m) -> int:
    """
    b: base
    e: exponent
    m: modulus
    """
    x = 1
    power = b % m
    elen = ceil(log2(e))  # e의 이진전개의 길이

    for i in range(elen):
        if (e >> i) & 1 == 1:
            # e의 i번째 이진수가 1인 경우
            x = (x * power) % m
        # power는 항상 b ** 2 ** i 만큼 증가한다
        power = (power * power) % m

    return x


if __name__ == "__main__":
    a, b, c = map(int, input().split())
    print(main(a, b, c))
    
