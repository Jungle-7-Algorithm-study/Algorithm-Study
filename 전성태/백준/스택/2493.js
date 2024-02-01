const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const N = parseInt(stdin[0])
const tops = stdin[1].split(' ').map(BigInt)
const ans = Array(N).fill(0)
const stack = []
for(let i = 0; i < N; i++){
    while(stack.length !== 0){
        if(tops[i] >= stack[stack.length-1][0])
            stack.pop()
        else{
            ans[i] = stack[stack.length-1][1] + 1
            break;
        }
    }
    stack.push([tops[i],i])
}
console.log(ans.join(' '))