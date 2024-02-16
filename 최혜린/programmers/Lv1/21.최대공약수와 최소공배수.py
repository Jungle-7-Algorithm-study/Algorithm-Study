def solution(n, m):
    # 최소공배수 -> 두 수 곱한 후 최대공약수로 나누기
    return [gcd(n, m), m*n // gcd(n, m)]

# 최대공약수 -> 유클리드 호제법
def gcd(n, m):
    if (m==0):
        return n
    return gcd(m, n%m)

n, m=3, 12
print(solution(n,m))
