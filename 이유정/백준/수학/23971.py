import sys

H, W, N, M = map(int, sys.stdin.readline().split())

if H % (1+N) == 0:
    width = H // (1+N)
else:
    width = (H // (1+N)) + 1

if W % (1+M) == 0:
    height = W // (1+M)
else:
    height = (W // (1+M)) + 1

print(width * height)

