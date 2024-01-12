function calc(){
    let sum = 0;
    for(let i = 0; i < N-1; i++){
        sum += Math.abs(newArr[i + 1] - newArr[i])
    }
    return sum
}

function recur(idx){
    if(idx === N){
        let sum = calc()
        if(ans < sum) ans = sum;
        return
    }
    
    for(let i = 0; i < N; i++){
        if(!check[i]){
            check[i] = true
            newArr.push(numArr[i])
            recur(idx + 1)
            check[i] = false
            newArr.pop()
        }
    }
}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const N = parseInt(input[0])
const numArr = input[1].split(' ').map(num=>parseInt(num,10))
const newArr = []
const check = Array(N).fill(false)
let ans = 0;
recur(0)
console.log(ans)