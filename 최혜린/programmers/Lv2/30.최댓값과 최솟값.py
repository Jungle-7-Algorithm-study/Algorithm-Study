def solution(s):
    nums = s.split(' ')
    arr = []

    for i in nums:
        arr.append(int(i))

    return str(min(arr)) + " " + str(max(arr))

# 간결한 코드
def solution(s):
    s = list(map(int, s.split()))  # list, map 아예 생각이 안났다..
    return s

s="-1 -2 -3 -4"
print(solution(s))