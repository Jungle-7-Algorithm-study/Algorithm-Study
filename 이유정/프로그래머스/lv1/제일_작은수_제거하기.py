def solution(arr):
    arr.remove(min(arr))
    if len(arr) == 0:
        return [-1]
    else:
        return arr
print(solution([1,2,3,4]))