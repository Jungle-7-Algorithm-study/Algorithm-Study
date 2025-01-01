"""
http://boj.kr/1629

거듭제곱과 모듈로 연산은 순환한다. 따라서 순환사이클만 알아내면 반복문을 돌릴 필요 자체가 없게된다.

공식은 기억이 안 나니까 합동이 나올때가지 i의 값을 늘려보고 cycle을 계산하자.

Timeout
"""

def main(a, b, c) -> int:
    """
    a**b mod c
    """
    memo = [a % c]
    index = 0
    cycles = 1
    power = a

    for _ in range(b):
        power *= a

        mod = power % c
        for i, e in enumerate(memo):
            if mod == e:
                cycles -= index
                index = i
                break
        memo.append(mod)

        cycles += 1
        
    modcycle = b % cycles
    return (memo[index] ** modcycle) % c


if __name__ == "__main__":
    a, b, c = map(int, input().split())

    print(main(a, b, c))
