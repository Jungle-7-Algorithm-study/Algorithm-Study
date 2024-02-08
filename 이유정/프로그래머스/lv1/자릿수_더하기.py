import sys


def solution(n):
    n = str(n)
    numbers = []
    for i in range(len(n)):
        numbers.append(n[i])
    hap = 0
    for number in numbers:
        hap += int(number)

    return hap

n = int(sys.stdin.readline())
print(solution(n))