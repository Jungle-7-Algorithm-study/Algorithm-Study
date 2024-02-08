const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const num = parseInt(input[0])
const myArr = []
for(let i = 1; i <= num; i++){
    if(!myArr.includes(input[i]))
    myArr.push(parseInt(input[i]))
}

myArr.sort((a,b)=>a-b)
console.log(myArr.join('\n'))


// 다시 풀어봐야함. 시간초과