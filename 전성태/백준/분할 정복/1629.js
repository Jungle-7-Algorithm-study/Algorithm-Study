function recur(a = A, b = B){
    if(b === 1){
        return a % C
    }

    let res = recur(a, ~~(b/2))
    if(b % 2 === 0){ // 짝수
        return res * res % C
    } else { // 홀수
        return res * res * a % C
    }
}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const [A_, B, C_] = input[0].split(' ').map(Number)
const A = BigInt(A_)
const C = BigInt(C_)

console.log(recur().toString())

// 메모리 : 9328 KB
// 시간 : 120 ms
