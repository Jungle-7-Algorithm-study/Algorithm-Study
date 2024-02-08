import sys

N = int(sys.stdin.readline())
cards = sorted(list(map(int, sys.stdin.readline().split())))
M = int(sys.stdin.readline())
checks = list(map(int, sys.stdin.readline().split()))

for check in checks:
    low, high = 0, N-1
    exist = False
    while low <= high:
        mid = (low + high) // 2
        if check < cards[mid]:
            high = mid - 1
        elif check > cards[mid]:
            low = mid + 1
        else:
            exist = True
            break
    print(1 if exist else 0, end= ' ')

