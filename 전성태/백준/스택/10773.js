const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const K = parseInt(stdin[0])
const stack = []
for(let i = 1; i <= K; i++){
  let num = parseInt(stdin[i])
  if(num)
    stack.push(num)
  else stack.pop()
}
console.log(stack.reduce((a,b)=>a+b,0).toString())