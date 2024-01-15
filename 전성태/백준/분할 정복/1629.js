function recur(a = A, b = B){
    if(b === 1n){
        return a % C
    }

    let res = recur(a, ~~(b/2n))
    if(b % 2n === 0n){ // 짝수
        return res * res % C
    } else { // 홀수
        return res * res * a % C
    }
}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const [A, B, C] = input[0].split(' ').map(BigInt)

console.log(recur().toString())

// 메모리 : 9328 KB
// 시간 : 124 ms
