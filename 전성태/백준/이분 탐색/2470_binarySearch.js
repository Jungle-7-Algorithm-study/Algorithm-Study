// 이분탐색 이용

function recur(start, end, num){
    if(start > end) return

    let middle = ~~((start + end)/2)

    let inner_gap = num + arr[middle]
    let abs_inner_gap = inner_gap < 0 ? -1n * inner_gap : inner_gap
    
    if(abs_inner_gap < ans){
        ans = abs_inner_gap
        ansStart = num
        ansEnd = arr[middle]
    }
    
    if(inner_gap === 0){
        return
    }
    else if(inner_gap > 0){
        recur(start, middle - 1,num)
    } else {
        recur(middle + 1, end,num)
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
for(let i = 0; i < N; i++){
    recur(i+1, N-1, arr[i])
}

console.log(ansStart.toString(), ansEnd.toString())

// 시간 : 480 ms
// 메모리 : 38644 KB