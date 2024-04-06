const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let [N, K] = stdin[0].split(' ').map(Number)
let A = []
for(let i = 1; i <= N; i++){
    let coin = Number(stdin[i])
    if(coin <= K)
        A.push(coin)
}
A = A.reverse()

let i = 0
let count = 1
while(true){
    if(K - A[i] < 0){
        i++
        continue
    }
    if(K - A[i] === 0){
        break
    }
    K = K-A[i]
    count++
}

console.log(count)