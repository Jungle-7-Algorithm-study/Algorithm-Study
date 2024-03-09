const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const K = Number(stdin[0])
let idx = 1
let visited
let graph
let ans = Array(K).fill('YES')
for(i = 0; i < K; i++){
    let [V, E] = stdin[idx].split(' ').map(Number)
    visited = Array(V+1).fill(0)
    graph = {}
    for(let gi = 1; gi <= V; gi++){
        graph[gi] = []
    }
    idx++
    let to = E + idx
    for(idx; idx < to;idx++){
        let [u, v] = stdin[idx].split(' ').map(Number)
        graph[u].push(v)
        graph[v].push(u)
    }
    for(let r = 1; r <= V; r++){
        if(!visited[r])
            DFS(r, 1)
    }
    for(let q = 1; q <= V; q++){
        for(let n = 0; n < graph[q].length; n++){
            let cur = visited[q]%2
            let child = visited[graph[q][n]]%2
            if(cur === child){
                ans[i] = 'NO'
            }
        }
    }
}
function DFS(v, color){
    visited[v] = color
    for(let i = 0; i < graph[v].length; i++){
        let next = graph[v][i]
        if(!visited[next]){
            DFS(next, color+1)
        }
    }
}

console.log(ans.join('\n'))