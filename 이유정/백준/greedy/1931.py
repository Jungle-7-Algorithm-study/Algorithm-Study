import sys

N = int(sys.stdin.readline())
schedule = []

for _ in range(N):
    time = list(map(int, sys.stdin.readline().split()))
    schedule.append(time)

schedule.sort(key=lambda x:(x[1], x[0]))
end = schedule[0][1]
cnt = 1
for i in range(1, N):
    if schedule[i][0] >= end:
        cnt += 1
        end = schedule[i][1]
print(cnt)