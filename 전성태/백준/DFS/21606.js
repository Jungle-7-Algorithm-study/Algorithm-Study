const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const N = Number(stdin[0])
const A = [0,...stdin[1]].map(Number)
const graph = Array(N)
for(let i = 1; i <= N; i++){
    graph[i] = []
}
for(let i = 2; i < N+1; i++){
    let [from, to] = stdin[i].split(' ').map(Number)
    graph[from].push(to)
    graph[to].push(from)
}
let visited = Array(N+1)
let ans = 0
for(let i = 1; i <= N; i++){
    visited.fill(0)
    if(A[i]) {
        DFS(i)
    }
}

function DFS(v){
    visited[v] = 1
    for(let i = 0; i < graph[v].length; i++){
        let next = graph[v][i]
        if(!A[next]){
            if(!visited[next]){
                DFS(next)   
            }
        } else{
            ans++
        }
    }
}

console.log(ans)