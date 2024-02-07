import sys

n = int(sys.stdin.readline())

ans = []
stack = []
cur = 1
flag = 0

for _ in range(n):
    m = int(sys.stdin.readline())
    while cur <= m:
        stack.append(cur)
        ans.append('+')
        cur += 1
    if stack[-1] == m:
        stack.pop()
        ans.append('-')
    else:
        flag = 1
        print('NO')
        break

if flag == 0:
    for i in ans:
        print(i)
