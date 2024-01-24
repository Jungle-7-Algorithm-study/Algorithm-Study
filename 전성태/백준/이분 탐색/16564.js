function binarySearch(start, end){
    if(start > end) {
        return
    }

    let middle = ~~((start + end)/2n)

    let val = arr[0] + middle // 목표  
    let count = 0n // 소비된 레벨
    for(let i = 0; i < N; i++){
        if(arr[i] >= val) continue
        else count += val - arr[i]
    }

    if(count > K){ // 목표 레벨을 낮춰야 할 때
        binarySearch(start, middle - 1n)
    } else { // 목표 레벨을 높여야 할 때
        ans = middle
        binarySearch(middle + 1n, end)
    }
}

const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, K_] = stdin[0].split(' ').map(Number)
const K = BigInt(K_)
const arr = []
for(let i = 1; i <= N; i++){
    arr.push(BigInt(stdin[i]))
}
arr.sort((a,b)=>{
    if(a-b>0) return 1
    else if(a-b<0) return -1
    else return 0
})
let ans = 0n

binarySearch(0n, K)
console.log((arr[0] + ans).toString())