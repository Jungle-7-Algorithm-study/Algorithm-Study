import sys

P = int(sys.stdin.readline())
for _ in range(P):
    T = list(map(int, sys.stdin.readline().split()))
    # T_number = T[0]
    cnt = 0
    for i in range(1, len(T)-1):
        for j in range(i+1, len(T)):
            if T[i] > T[j]:
                T[i], T[j] = T[j], T[i]
                cnt += 1
    print(T[0], cnt)