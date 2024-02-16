T = int(input())

for _ in range(T):
    score = input()
    cnt, total = 0, 0
    for i in range(len(score)):
        if score[i] == 'O':
            cnt += 1
            total += cnt
        else:
            cnt = 0
    print(total)