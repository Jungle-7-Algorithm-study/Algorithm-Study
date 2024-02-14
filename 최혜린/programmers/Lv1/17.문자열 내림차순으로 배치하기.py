def solution(s):
    ans = sorted(s, reverse=True)
    
    return ''.join(ans)

s = "Zbcdefg"
print(solution(s))