const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let repeat = 0
const ans = []
//위 왼 아 오 북서 남서 남동 북동
const dy = [-1, 0, 1, 0, -1, 1, 1, -1]
const dx = [0, -1, 0, 1, -1, -1, 1, 1]
while(stdin[repeat] !== '0 0'){
    let [w, h] = stdin[repeat].split(' ').map(Number)
    repeat++
    let graph = Array(h)
    let visited = Array(h)
    let count = 0
    for(let i = 0; i < h; i++){
        graph[i] = stdin[repeat + i].split(' ').map(Number)
        visited[i] = Array(w).fill(0)
        count++
    }
    
    let ansCount = 0
    for(let y = 0; y < h; y++){
        for(let x = 0; x < w; x++){
            if(!visited[y][x] && graph[y][x]){
                DFS(w, h, y, x, visited, graph)
                ansCount++
            }
        }
    }

    ans.push(ansCount)
    repeat += count
    
}

console.log(ans.join('\n'))

function DFS(w, h, y, x, visited, graph){
    let count = 0
    visited[y][x] = 1

    for(let i = 0; i < 8; i++){
        let dirY = y + dy[i]
        let dirX = x + dx[i]
        if(0 <= dirY && dirY < h && 0 <= dirX && dirX < w){
            if(!visited[dirY][dirX] && graph[dirY][dirX]){
                count += DFS(w, h, dirY, dirX, visited, graph)
                count++
            }
        }
    }
    return count
}