# 	189804	560
import sys
input = sys.stdin.readline

words = input().strip()
exp = input().strip();

len_bomb = len(exp)
ans = []

for i in words:
    ans.append(i);
    if("".join(ans[-len_bomb:]) == exp):
        del ans[-len_bomb:]
print("".join(ans) if ans else 'FRULA');

