function solution(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (stack[stack.length - 1] === s[i]) {
            stack.pop();
        }
        else {
            stack.push(s[i]);
        }
    }
    return stack.length===0 ? 1 : 0;
}
s = "cdcd";

console.log(solution(s));