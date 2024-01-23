function recur(start, end){
    if(start >= end) return

    let inner_gap = arr[end] + arr[start]
    let abs_inner_gap = inner_gap < 0 ? -1n * inner_gap : inner_gap
    
    if(abs_inner_gap < ans){
        ans = abs_inner_gap
        ansStart = start
        ansEnd = end
    }
    
    if(inner_gap === 0){
        return
    }
    else if(inner_gap > 0){
        recur(start, end - 1)
    } else {
        recur(start + 1, end)
    }
}

const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const N = parseInt(stdin[0])
const arr = stdin[1].split(' ').map(BigInt)
arr.sort((a,b)=>{
    if(a-b>0) return 1
    else if(a-b<0) return -1
    else return 0
})
let ansStart = 0;
let ansEnd = 0;
let ans = 1_000_000_000_000n;
recur(0, N-1)

console.log(arr[ansStart].toString(), arr[ansEnd].toString())