import sys

input_str = list(sys.stdin.readline().strip())
bomb_str = list(sys.stdin.readline().strip())
bomb_len = len(bomb_str)
stack = []

for i in input_str:
    stack.append(i)
    if stack[len(stack)-bomb_len:len(stack)] == bomb_str:
        for _ in range(bomb_len):
            stack.pop()
if stack:
    print(*stack,sep='')
else:
    print("FLULA")



