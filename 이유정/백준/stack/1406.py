import sys

left = list(sys.stdin.readline().rstrip())
n = int(sys.stdin.readline())

right = []
#right 배열은 마지막에 reverse해서 문자열 붙이기
for _ in range(n):
    command = list(sys.stdin.readline().rstrip())
    if command[0] == 'L':
        if left:
            right.append(left.pop()) #left의 마지막 원소를 pop해서 right의 첫번째 위치에 삽입.

    elif command[0] == 'D': #커서를 오른쪽으로 한칸 이동. 커서가 문장의 맨뒤인 경우 무시.
        if right: #커서가 문장의 맨 뒤인 경우, right 스택이 비어있다.
            #right의 0번째 원소를 pop해서 left의 마지막에 삽입
            left.append(right.pop())
    elif command[0] == 'B': #커서 왼쪽 문자 삭제
        #만약 커서가 문장의 가장 앞이라면 무시
        if left:
            left.pop()
    else:
        left.append(command[-1])
left.extend(reversed(right))
print(''.join(left))