function recur(start, end){
    if(start > end){ // 다 돌아도 없을 때
        return
    }

    let half = ~~((start + end)/2n)
    let count = 1; // 맨 처음 집에는 무조건 공유기 설치 가정
    let val = homes[0] // 맨 처음 집에는 무조건 공유기 설치 가정
    for(let i = 1; i < N; i++){
        if(homes[i] >= val + half){
            val = homes[i]
            count++
        }
    }
    if(count >= C){
        ans = half
        recur(half+1n, end)
    } else {
        recur(start, half-1n)
    }
}

const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, C] = stdin[0].split(' ').map(Number)
let homes = []
for(let i = 1; i <= N; i++){
    homes.push(BigInt(stdin[i]))
}
homes.sort((a, b)=>{
    if(a-b>0n) return 1
    else if(a-b<0n) return -1
    else return 0
})
let ans = 0;
recur(1n,homes[N-1]-homes[0]) // 두 공유기 사이의 최소 거리 후보 중 제일 적은 건 1 이므로
console.log(ans.toString())