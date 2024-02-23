C = int(input())
score = []
for _ in range(C):
    scores = list(map(int, input().split()))
    avg = sum(scores[1:]) / scores[0]

    cnt = 0
    for score in scores[1:]:
        if score > avg:
            cnt += 1

    ans = (cnt / scores[0]) * 100
    print(f'{ans:.3f}%')