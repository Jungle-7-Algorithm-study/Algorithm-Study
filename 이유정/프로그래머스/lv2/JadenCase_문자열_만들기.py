import string
import sys


def solution(s):
    s_list = s.split()
    # print(s_list)
    if s_list[0][0] not in string.ascii_letters:
        for i in range(1, len(s_list)):
            if s_list[i][0] in string.ascii_lowercase:
                fst = s_list[i][0]
                fst_upper = fst.upper()
                s_list[i] = s_list[i].replace(fst, fst_upper)
            for check in s_list[i][1:]:
                if check.isupper():
                    check_lower = check.lower()
                    s_list[i] = s_list[i].replace(check, check_lower)
    else:
        for i in range(0, len(s_list)):
            if s_list[i][0] in string.ascii_lowercase:
                fst = s_list[i][0]
                fst_upper = fst.upper()
                s_list[i] = s_list[i].replace(fst, fst_upper)

            for check in s_list[i][1:]:
                if check.isupper():
                    check_lower = check.lower()
                    s_list[i] = s_list[i].replace(check, check_lower)
    answer = " ".join(s_list)
    # answer = s_list[0][0]
    return answer

input = sys.stdin.readline()
result = solution(input)
print(result)