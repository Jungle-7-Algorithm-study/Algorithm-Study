import sys
import heapq

N = int(sys.stdin.readline())
homework = [] #숙제 정보를 담는 최대힙. 값은 (데드라인, 컵라면 수) 튜플의 형태로 담긴다.
cups = [] #현재 시간에서 풀 수 있는 문제의 컵라면 수를 담아두는 최대힙
time = 0 #현재 시간

for _ in range(N):
    deadline, cup = map(int, sys.stdin.readline().split())
    time = max(time, deadline) #현재 시간은 가장 큰 데드라인으로 설정

    #problems에 (-deadline, cup)을 넣어둔다.
    #최대힙으로 사용하기 위해 -deadline을 넣어둔다.
    heapq.heappush(homework, (-deadline, cup))
cnt = 0 #얻을 수 있는 컵라면의 총 개수
while time > 0:
    while homework: #아직 풀 수 있는 숙제들이 남아있는 경우에만
        next_deadline, next_cup = heapq.heappop(homework)

        #만약 다음 숙제의 데드라인이 현재 시간과 일치한다면 해당 문제의 컵라면 수를 cups에 넣어준다
        #이때 최대힙을 구성하기 위해 -next_cup의 형태로 값을 넣는다
        if time == -next_deadline: #이미 -deadline으로 들어가 있기 때문에 한번더 -를 곱해주면 양수가 되니 time과 비교할 수 있다.
            heapq.heappush(cups, -next_cup)
        else: #만약 현재 시간에 풀 수 없는 문제라면(즉, 현재 deadline과 다르다면) 다시 homework에 넣어주고 반복문 종료
            heapq.heappush(homework, (next_deadline, next_cup))
            break
    #현재 시간에 풀 수 있는 문제가 남아있다면 문제를 풀고 컵라면을 얻는다
    if cups:
        cnt += -heapq.heappop(cups) #cups에서 pop한 결과는 음수이기 때문에 -를 곱해준다
    time -= 1
print(cnt)