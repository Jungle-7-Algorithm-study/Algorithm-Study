import sys


def solution(s):
    s_list = s.split()
    for i in range(len(s_list)):
        s_list[i] = int(s_list[i])
    answer = f"{min(s_list)} {max(s_list)}"

    return answer

input = sys.stdin.readline()
result = solution(input)
print(result)