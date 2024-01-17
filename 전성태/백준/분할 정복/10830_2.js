function calc(U,V){
    let newArr = Array(N)
    for(let i = 0; i < N; i++){
        newArr[i] = Array(N)
    }
    for(let row = 0; row < N; row++){
        for(let col = 0; col < N; col++){
            let e = 0
            for(let i = 0; i < N; i++){
                e += U[row][i] * V[i][col]
            }
            newArr[row][col] = e % 1000
        }
    }
    return newArr
}

function recur(b = B){
    if(b === 1n){
        return arr
    }

    let half = recur(~~(b/2n))
    if(b%2n){ // 홀수
        return calc(calc(half,half),arr)
    } else {
        return calc(half, half)
    }
}

const stdin = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const [N_, B_] = stdin[0].split(' ')
const N = parseInt(N_)
const B = BigInt(B_)
const arr = Array(N)
for(let i = 0; i < N; i++){
    arr[i] = stdin[i+1].split(' ').map((num)=>Number(num)%1000)
}
let ans = recur()
for(let i = 0; i < N; i++){
    console.log(ans[i].join(' '))
}