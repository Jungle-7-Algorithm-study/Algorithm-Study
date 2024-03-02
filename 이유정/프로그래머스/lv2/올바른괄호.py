def solution(s):
    list(s)
    stack = []
    for i in range(len(s)):
        if s[i] == '(':
            stack.append(s[i])
        elif s[i] == ')' and not stack:
            return False
        elif s[i] == ')' and stack:
            stack.pop()
    if stack:
        return False
    else:
        return True