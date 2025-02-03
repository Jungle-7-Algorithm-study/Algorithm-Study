const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, K] = stdin[0].split(' ').map(Number)
const coins = []
for(let i = 1; i <= N; i++){
    coins.push(parseInt(stdin[i]))
}

const visited = Array(K+1).fill(0)
const coinQueue = []
coins.forEach((e)=>{
    if(e <= K) {
        coinQueue.push([e,1])
        visited[e] = 1
    }
})


const ans = []
let i = 0
while(coinQueue.length > i){ // 동전 갯수가 BFS Depth
    let [sum, num] = coinQueue[i]
    if(sum === K){
        i++
        ans.push(num)
        break // 어차피 먼저 pop 되는건 더 low의 갯수일테니
    }

    for(let i = 0; i < N; i++){
        if(sum + coins[i] <= K && !visited[sum + coins[i]]){
            coinQueue.push([sum + coins[i], num + 1])
            visited[sum + coins[i]] = 1
        }
    }
    i++
}

if(!ans.length) console.log(-1)
else console.log(ans.reduce((a,b)=>a>b?b:a))