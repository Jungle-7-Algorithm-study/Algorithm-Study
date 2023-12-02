# 스택으로 다시 풀어보기
import sys
input = sys.stdin.readline
# a b c d

from collections import deque
words =list(input()[:-1])
stack = deque();

count = int(input()); # 4
# 왼쪽은  커서 왼쪽의 내용 words
# 오른쪽은 커서 오른쪽의 내용. stack
for i in range(count):
    print(words)
    print(stack)
    order = input().split();
    
    if(order[0] == 'L' and words):
        stack.appendleft(words.pop());
    elif(order[0] == 'B' and words): 
        # 4 4
        words.pop();
    elif(order[0] == "D" and stack):
        words.append(stack.popleft())
    elif(order[0] == "P" ):
        words.append(order[1]);
result = words + list(stack);
print("".join(result));
