import sys

N = int(sys.stdin.readline())

for i in range(N):
    rate_list = []
    cnt = 1  # 면접 1등, 서류 1등은 무조건 뽑히기 때문
    people = int(sys.stdin.readline()) #사람 수
    for _ in range(people):
        rate = list(map(int, sys.stdin.readline().split()))
        rate_list.append(rate)
    rate_list.sort(key=lambda x:x[0]) #서류 심사 순 정렬
    min_interview = rate_list[0][1]

    for j in range(1, people):
        if rate_list[j][1] < min_interview:
            min_interview = rate_list[j][1]
            cnt += 1
    print(cnt)