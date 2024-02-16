def solution(s):
    arr = s.split(' ')
    ans = []
    
    for i in arr:
        if i:
            ans.append(i[0].upper() + i[1:].lower())
        else:
            ans.append(i)
        
    return ' '.join(ans)

# title, capitalize 내장함수 사용한 코드
def solution(s):
    ans = ''
    arr = s.split(' ')

    for i in range(len(arr)):
        # 한 단어 기준 무조건 첫 문자만 대문자로 처리
        arr[i] = arr[i].capitalize()
    
    return ' '.join(arr)

s = "for the last week"
print(solution(s))