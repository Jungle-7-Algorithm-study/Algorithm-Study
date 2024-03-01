from collections import deque
def solution(progresses, speeds):
    #제일 앞에 있는 숫자가 progresses[0]이 100이 되는 순간 stack으로 for문을 통해 순서대로 stack에 들어가고,
    #stack에 들어가있는 갯수를 세고
    #stack에 있는 것들을 모두 지움
    ans = []
    progresses = deque(progresses)
    speeds = deque(speeds)
    while progresses:
        stack = []
        progresses = [progress + speed for progress, speed in zip(progresses, speeds)]
        progresses = deque(progresses)
        if progresses[0] >= 100:
            for _ in range(len(progresses)):
                if progresses[0] >= 100:
                    stack.append(progresses.popleft())
                    speeds.popleft()
                else:
                    break
            ans.append(len(stack))
    return ans

print(solution([93, 30, 55], [1, 30, 5]))
# def solution(a, b):
#     for a1 in zip(a, b):
#         print(f'a1 : {a1}')
#     for a1, b1 in zip(a, b):
#         print(f'a1, b1, a1+b1: {a1}, {b1}, {a1 + b1}')
#     return
#
# print(solution([1, 2], [3, 4]))