def solution(arr):
    ans = [arr[0]]
    for i in range(1, len(arr)):
        if (arr[i-1] == arr[i]):
            continue
        ans.append(arr[i])
    
    return ans

# ans[-1]할 경우 arr가 빈 배열일 때
# IndexError: list index out of range 나옴
# 이걸 방지하기 위해 ans[-1:] == [i] 이런식으로 리스트끼리 비교하면 에러 X!!
def solution(arr):
    ans = []
    for i in arr:
        if (ans[-1:] == [i]):
            continue
        ans.append(i)
    return ans

arr = [1,1,3,3,0,1,1]
print(solution(arr))