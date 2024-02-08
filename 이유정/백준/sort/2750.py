import sys

N = int(sys.stdin.readline())
numbers = []
for _ in range(N):
    number = int(sys.stdin.readline())
    numbers.append(number)
numbers = sorted(numbers)

for i in range(0, N):
    print(numbers[i])