const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const N = parseInt(stdin[0])
const stack = []
for(let i = 1; i <= N; i++){
    stack.push(parseInt(stdin[i]))
}
const ans = []
ans.push(stack.pop())
for(let i = 1; i < N; i++){
    let bar = stack.pop()
    if(bar > ans[ans.length-1])
        ans.push(bar)
}
console.log(ans.length.toString())