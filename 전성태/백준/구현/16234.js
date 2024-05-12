const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, L, R] = stdin[0].split(' ').map(Number)
const graph = Array(N)
for(let i = 0; i < N; i++){
    graph[i] = stdin[i + 1].split(' ').map(Number)
}

let day = 0
while(true){
    let visited = Array.from(Array(N),()=>Array(N).fill(0))
    let flag = false
    for(let y = 0; y < N; y++){
        for(let x = 0; x < N; x++){
            if(!visited[y][x]){
                let [conRes, calcPeople] = BFS(y, x, visited)
                if(conRes.length !== 1) {
                    flag = true
                    for(i of conRes){
                        let [resY, resX] = i
                        graph[resY][resX] = calcPeople
                    }
                }
            }
        }
    }
    if(!flag) break
    day++
}

console.log(day)

function BFS(startY, startX, visited){
    const dy = [-1, 0, 1, 0]
    const dx = [0, -1, 0, 1]
    const queue = [[startY, startX]]
    let connected = [[startY, startX]]
    visited[startY][startX] = 1
    let i = 0
    let peopleSum = graph[startY][startX]
    while(i < queue.length){
        let [y, x] = queue[i]

        for(let i = 0; i < 4; i++){
            let dirY = y + dy[i]
            let dirX = x + dx[i]
            if(0 <= dirY && dirY < N && 0 <= dirX && dirX < N){
                let difference = Math.abs(graph[dirY][dirX] - graph[y][x])
                if(!visited[dirY][dirX]){
                    if(L <= difference && difference <= R){
                        queue.push([dirY,dirX])
                        visited[dirY][dirX] = 1
                        connected.push([dirY,dirX])
                        peopleSum += graph[dirY][dirX]
                    }
                }
            }
        }
        i++
    }
    return [connected,~~(peopleSum / connected.length)]
}

