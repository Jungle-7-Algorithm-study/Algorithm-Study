def solution(s):
    if (s[0] == ')'):
        return False
    
    stackCnt = 0

    for i in range(len(s)):
        if (s[i] == '('):
            stackCnt += 1
        else:
            stackCnt -= 1

        # 짝만 보면 안됨. 음수가 되면 닫힌 괄호가 먼저 나온 것이므로 바로 false
        if stackCnt < 0:
            return False
    
    return stackCnt == 0

s = "(())()"
print(solution(s))