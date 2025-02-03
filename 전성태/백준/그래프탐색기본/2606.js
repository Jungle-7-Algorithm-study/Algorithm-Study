const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const C = Number(stdin[0])
const V = Number(stdin[1])
const graph = Array(C)
for(let i = 1; i <= C; i++){
    graph[i] = []
}

for(let i = 2; i <= V+1; i++){
    const [from, to] = stdin[i].split(' ').map(Number)
    graph[from].push(to)
    graph[to].push(from)
}

const visited = Array(C).fill(0)
let ans = 0

function DFS(v){
    visited[v] = 1
    for(let i = 0; i < graph[v].length; i++){
        let next = graph[v][i]
        if(!visited[next]){
            ans++
            DFS(next)
        }
    }
}

DFS(1)

console.log(ans)