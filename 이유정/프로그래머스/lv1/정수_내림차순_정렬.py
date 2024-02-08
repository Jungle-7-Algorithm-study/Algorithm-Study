def solution(n):
    list_n = list(str(n))
    list_n.sort(reverse=True)
    print(list_n)
    answer = ''.join(list_n)

    return int(answer)

n = 118372
print(solution(n))