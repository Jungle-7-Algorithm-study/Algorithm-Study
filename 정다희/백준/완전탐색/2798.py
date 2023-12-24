import sys
input = sys.stdin.readline

from itertools import combinations

N, M = map(int, input().split())
lst = list(map(int, input().split()))
nlst = []

for three in combinations(lst, 3):
    if sum(three) > M:
        continue
    else:
        nlst.append(sum(three))
print(max(nlst))