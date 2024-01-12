function recur(idx,curCity){
    if(idx === N-1){
        if(cityArr[curCity][0] !== 0){
            curSum += cityArr[curCity][0]
            if(sumVal > curSum) sumVal = curSum
            curSum -= cityArr[curCity][0]
        }
        return
    }

    for(let i = 0; i < N; i++){
        if(!check[i] && cityArr[curCity][i] !== 0){
            check[i] = true
            curSum += cityArr[curCity][i]
            recur(idx + 1, i)
            check[i] = false
            curSum -= cityArr[curCity][i]
        }
    }
}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const N = parseInt(input[0])
const cityArr = []
for(let i = 0; i < N; i++){
    cityArr[i] = input[i+1].split(' ').map(num=>parseInt(num,10))
}
const check = Array(N).fill(false)
check[0] = true
let sumVal = 1000000*N
let curSum = 0;
recur(0,0)
console.log(sumVal)