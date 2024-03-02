from collections import deque
def solution(priorities, location):
    priorities = deque(priorities)
    locations = [i for i in range(len(priorities))]
    locations = deque(locations)
    cnt = 1
    while True:
        if priorities[0] is not max(priorities):    #제일 앞의 중요도가 max가 아니면
            priorities.rotate(-1)   #제일 앞에 있는 숫자가 제일 뒤로 이동
            locations.rotate(-1)
        elif priorities[0] is max(priorities):   #제일 앞의 중요도가 max면
            priorities.popleft()
            if locations.popleft() == location:
                return cnt
            cnt += 1

print(solution([1, 1, 9, 1, 1, 1], 0))
