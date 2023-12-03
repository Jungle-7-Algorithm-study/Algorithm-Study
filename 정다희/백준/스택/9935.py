import sys
input = sys.stdin.readline

words = input().strip()
exp = input().strip();
while(exp in words):
    words = words.replace(exp, '');
if words == "" :
    print('FRULA');
else:
    print(words)
