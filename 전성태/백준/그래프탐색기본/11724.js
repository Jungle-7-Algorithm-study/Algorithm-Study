const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M] = stdin[0].split(' ').map(Number)
const graph = Array(N+1)
for(let i = 1; i <= N; i++){
    graph[i] = []
}
for(let i = 1; i <= M; i++){
    let [from, to] = stdin[i].split(' ').map(Number)
    graph[from].push(to)
    graph[to].push(from)
}
 
const visited = Array(N).fill(0)
let ans = 0

function DFS(v){
    visited[v] = 1
    for(let i = 0; i < graph[v].length; i++){
        if(!visited[graph[v][i]]){
            DFS(graph[v][i])
        }
    }
}

for(let i = 1; i <= N; i++){
    if(!visited[i]){
        ans++
        DFS(i)
    }
}

console.log(ans)