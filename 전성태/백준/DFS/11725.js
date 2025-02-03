const stdin = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const N = Number(stdin[0])
const graph = Array(N)
for(let i = 1; i <= N; i++){
    graph[i] = []
}
for(let i = 1; i < N; i++){
    let [a, b] = stdin[i].split(' ').map(Number)
    graph[a].push(b)
    graph[b].push(a)
}

const visited = Array(N).fill(0)
function DFS(v = 1, parent = 1){
    visited[v] = parent
    for(let i = 0; i < graph[v].length; i++){
        let next = graph[v][i]
        if(!visited[next]) DFS(next, v)
    }
}
DFS()

let ans = []
for(let i = 2; i < N+1; i++){
    ans.push(visited[i])
}

console.log(ans.join('\n'))

