const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const N = Number(stdin[0])
const graph = Array(N)
const visited = Array(N)
for(let i = 1; i <= N; i++){
    graph[i-1] = stdin[i].split(' ').map(Number)
    visited[i-1] = Array(N).fill(-1)
}

const ans = []
let day = 0
while(true){
    let count = 0
    for(let y = 0; y < N; y++){
        for(let x = 0; x < N; x++){
            if(visited[y][x] !== day && graph[y][x]){
                BFS(y,x,day)
                count++
            }
        }
    }
    ans.push(count)
    if(count === 0) break
    day++
}

console.log(ans.reduce((a,b)=>a>b?a:b))


function BFS(y,x,day){
    const queue = [[y,x]]
    visited[y][x] = day
    const dy = [-1,0,1,0]
    const dx = [0,-1,0,1]
    let i = 0
    // 위 왼 아 오
    while(queue.length > i){
        let [y,x] = queue[i]
        graph[y][x]--

        for(let i = 0; i < 4; i++){
            let dirY = y + dy[i]
            let dirX = x + dx[i]
            if(0 <= dirY && dirY < N && 0 <= dirX && dirX < N){
                if(visited[dirY][dirX] !== day && graph[dirY][dirX]){
                    visited[dirY][dirX] = day
                    queue.push([dirY,dirX])
                }
            }
        }
        i++
    }
}