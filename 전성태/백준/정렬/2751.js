const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const N = parseInt(input[0])
const numArr = []
for(let i = 1; i <= N; i++){
    numArr.push(parseInt(input[i]))
}

numArr.sort((a,b)=>a - b)
console.log(numArr.join('\n'))