const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M] = stdin[0].split(' ').map(Number)
const maxCnt = (N + 1) / 2 // 보다 작거나 큰게 이 갯수가 되면서부터는 나가리
const bigArr = Array(N+1)
const smallArr = Array(N+1)
let ans = 0;
for(let i = 1; i <= N; i++){
    bigArr[i] = []
    smallArr[i] = []
}


for(let i = 1; i <= M; i++){
    let [big, small] = stdin[i].split(' ').map(Number)
    bigArr[small].push(big)
    smallArr[big].push(small)
}

let visited
for(let i = 1; i <= N; i++){
    visited = Array(N+1).fill(false)
    if (DFS(i, bigArr) >= maxCnt || DFS(i, smallArr) >= maxCnt) ans++;
}

function DFS(num, arr){
    if(!arr[num].length) return 0

    let countBig = 0
    let child = arr[num]
    for(let i = 0; i < child.length; i++){
        if(!visited[child[i]]){
            visited[child[i]] = true
            countBig++
            countBig += DFS(child[i], arr)
        }
    }
    return countBig
}

console.log(ans)