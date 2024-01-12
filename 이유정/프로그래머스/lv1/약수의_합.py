def solution(n):
    yaksu = []
    if n == 0:
        return 0
    for i in range(1, int(n**(1/2)+1)):
        if n % i == 0:
            yaksu.append(i)
            yaksu.append(n // i)
    yaksu = set(yaksu)
    yaksu = list(yaksu)
    answer = sum(yaksu)
    return answer

n = 16
print(solution(n))