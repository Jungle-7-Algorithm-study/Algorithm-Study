const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const T = Number(stdin[0])
let next = 1
const ans = []
let graph
// 위, 왼, 아, 오
const dy = [-1, 0, 1, 0]
const dx = [0, -1, 0, 1]

for(let i = 0; i < T; i++){
    let [M, N, K] = stdin[next].split(' ').map(Number)
    next++
    graph = Array(N)
    for(let j = 0; j < N; j++){
        graph[j] = Array(M).fill(0)
    }
    let bachus = []
    let finish = K + next
    for(next; next < finish; next++){
        let [x, y] = stdin[next].split(' ').map(Number)
        bachus.push([y,x])
        graph[y][x] = 1
    }

    let count = 0
    for(let p = 0; p < K; p++){
        let [y, x] = bachus[p]
        if(graph[y][x] !== 2){
            count++
            DFS(y,x)
        }
    }
    ans.push(count)

    function DFS(y, x){
        graph[y][x]++
    
        for(let i = 0; i < 4; i++){
            let dirY = y + dy[i]
            let dirX = x + dx[i]
            if(0 <= dirX && dirX < M && 0 <= dirY && dirY < N){
                if(graph[dirY][dirX] === 1){
                    DFS(dirY, dirX)
                }
            }
        }
    }
}


console.log(ans.join('\n'))