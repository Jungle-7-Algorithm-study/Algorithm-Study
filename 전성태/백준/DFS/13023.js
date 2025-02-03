const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M] = stdin[0].split(' ').map(Number)
const graph = {}
for(let i = 0; i < N; i++){
    graph[i] = []
}
for(let i = 1; i <= M; i++){
    let [a, b] = stdin[i].split(' ').map(Number)
    graph[a].push(b)
    graph[b].push(a)
}

let visited

let flag = false

for(let i = 0; i < N; i++){
    visited = Array(N).fill(0)
    let success = DFS(i)
    if(success){
        flag = true
        break
    }
}

if(flag) console.log(1)
else console.log(0)

function DFS(start, count = 0){
    let success = false
    if(count === 4) return true
    visited[start] = 1
    for(let i = 0; i < graph[start].length; i++){
        if(!visited[graph[start][i]]){
            success = DFS(graph[start][i], count + 1)
            if(success) return true
            else visited[graph[start][i]] = 0
        }
    }
    return success
}