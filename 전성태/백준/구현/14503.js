const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M] = stdin[0].split(' ').map(Number)
const [r, c, d] = stdin[1].split(' ').map(Number)
const graph = Array(N)
for(let i = 0; i < N; i++){
    graph[i] = stdin[i + 2].split(' ').map(Number)
}

// 위 오 아 왼
const dy = [-1, 0, 1, 0]
const dx = [0, 1, 0, -1]

let y = r
let x = c
let dir = d
let cleanCount = 0
while(true){
    if(graph[y][x] === 0){
        cleanCount++
        graph[y][x] = 2
    }
    let findZero = false
    for(let i = 0; i < 4; i++){
        let dirY = y + dy[i]
        let dirX = x + dx[i]
        if(0 <= dirY && dirY < N && 0 <= dirX && dirX < M){
            if(!graph[dirY][dirX]){
                findZero = true
                break
            }
        }
    }
    if(findZero){
        dir = (dir - 1) % 4
        if(dir === -1) dir = 3
        let frontY = dy[dir] + y
        let frontX = dx[dir] + x
        if(0 <= frontY && frontY < N && 0 <= frontX && frontX < M){
            if(!graph[frontY][frontX]){
                y = frontY
                x = frontX
            }
        }
    } else {
        let back = (dir + 2) % 4
        let backY = dy[back] + y
        let backX = dx[back] + x
        if(0 <= backY && backY < N && 0 <= backX && backX < M){
            if(graph[backY][backX] !== 1){
                y = backY
                x = backX
            } else {
                break
            }
        } else {
            break
        }
    }
}

console.log(cleanCount)