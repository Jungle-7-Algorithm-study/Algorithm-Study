def solution(sizes):
    #더 긴 길이를 가로 길이에 오게 함
    w = 0
    h = 0
    for i in range(len(sizes)):
        sizes[i].sort(reverse=True)
        #가로 길이 중 가장 긴 길이 갱신
        w = max(sizes[i][0], w)
        #세로 길이 중 가장 긴 길이 갱신
        h = max(sizes[i][1], h)
    return w * h
print(solution([[60, 50], [30, 70], [60, 30], [80, 40]]	))