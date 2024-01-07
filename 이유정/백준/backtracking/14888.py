import sys

N = int(sys.stdin.readline())
num = list(map(int, sys.stdin.readline().split()))
op = list(map(int, sys.stdin.readline().split()))

maxi = -1e9
mini = 1e9
def dfs(depth, total, plus, minus, multi, div):
    global maxi, mini
    if depth == N:
        maxi = max(total, maxi)
        mini = min(total, mini)
        # print(f'depth : {depth}, max : {maxi}')
        # print(f'depth : {depth}, min : {mini}')
        # print('===============================')
        return
    if plus:
        # print(f'depth : {depth}')
        dfs(depth+1, total + num[depth], plus -1, minus, multi, div)
    if minus:
        # print(f'depth : {depth}')
        dfs(depth+1, total - num[depth], plus, minus-1, multi, div)
    if multi:
        # print(f'depth : {depth}')
        dfs(depth+1, total * num[depth], plus, minus, multi-1, div)
    if div:
        # print(f'depth : {depth}')
        dfs(depth+1, int(total / num[depth]), plus, minus, multi, div-1)

dfs(1, num[0], op[0], op[1], op[2], op[3])
print(maxi)
print(mini)