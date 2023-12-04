import sys
N = map(int, sys.stdin.readline().split())
A = set(map(int, sys.stdin.readline().split()))
B = set(map(int, sys.stdin.readline().split()))

ans_1 = (A - B)
ans_2 = (B - A)
print(len(ans_1) + len(ans_2))

# print(ans_1)
# print(ans_2)