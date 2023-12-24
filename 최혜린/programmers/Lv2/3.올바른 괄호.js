function solution(s) {
    // 닫는 괄호는 먼저 걸러주기 필수...
    if (s[0] === ")")
        return false;

    let stackCnt = 0;

    for (let i = 0; i < s.length; i++) {
        stackCnt += s[i] === '(' ? 1 : -1;
        if (stackCnt < 0)
            return false;
    }
    return stackCnt === 0 ? true : false
}

s = "()()"
console.log(solution(s));