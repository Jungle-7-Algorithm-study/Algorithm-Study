const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const N = Number(stdin[0])
const graph = Array(N)
const visitedNormal = Array(N)
const visitedJukRok = Array(N)
for(let i = 1; i <= N; i++){
    graph[i-1] = stdin[i].split('')
    visitedNormal[i-1] = Array(N).fill(0)
    visitedJukRok[i-1] = Array(N).fill(0)
}

let nomalAns = 0
let zukRokAns = 0 

for(let y = 0; y < N; y++){
    for(let x = 0; x < N; x++){
        if(!visitedNormal[y][x]){
            BFS(y,x,graph[y][x],visitedNormal, 'normal')
            nomalAns++
        }
        if(!visitedJukRok[y][x]){
            BFS(y,x,graph[y][x],visitedJukRok, 'zukRok')
            zukRokAns++
        }
    }
}

// 위 왼 아 오
const dy = [-1, 0, 1, 0]
const dx = [0, -1, 0, 1]


function BFS(y = 0 ,x = 0,color,visited, type){
    if(type === 'normal'){
        if(graph[y][x] !== color) return
    } else {
        if((color === 'R' || color === 'G') && graph[y][x] === 'B') return
        else if(color === 'B' && graph[y][x] !== color) return
    }

    visited[y][x] = 1

    for(let i = 0; i < 4; i++){
        let dirY = y + dy[i]
        let dirX = x + dx[i]
        if(0 <= dirY && dirY < N && 0 <= dirX && dirX < N){
            if(!visited[dirY][dirX]){
                BFS(dirY, dirX, color, visited, type)
            }
        }
    }
}

console.log(nomalAns, zukRokAns)