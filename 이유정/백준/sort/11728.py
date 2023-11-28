import sys
N, M = map(int, sys.stdin.readline().split())

A = list(map(int, sys.stdin.readline().split()))
B = list(map(int, sys.stdin.readline().split()))
C = A + B
# answer = ' '.join(map(str, sorted(C)))
C.sort()

print(C)