const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const N = Number(stdin[0])
const A = [0,...stdin[1]].map(Number)
const graph = Array(N)
for(let i = 1; i <= N; i++){
    graph[i] = []
}

let ans = 0

for(let i = 2; i < N+1; i++){
    let [from, to] = stdin[i].split(' ').map(Number)
    graph[from].push(to)
    graph[to].push(from)
    if(A[from] && A[to]) ans += 2 // 실내끼리 연결되어 있을 경우는 따로 처리해줘야 함
}

let visited = Array(N+1).fill(0)

for(let i = 1; i <= N; i++){
    let indoor = 0
    if(!A[i]) { // 실외라면
        if(!visited[i]){
            visited[i] = 1
            indoor = DFS(i) // 이 실외에서 갈 수 있는 모든 실내의 갯수를 DFS로 받아옴.
        }
    }

    ans += indoor * (indoor - 1) // i 실외에서 갈 수 있는 모든 실내가 n이라고 할 때 n(n-1)을 해줌.
    // n개 중 실내 하나 뽑기 : n, 방금 뽑은 실내 빼고 하나 뽑기 : (n - 1)
}

function DFS(v){
    let indoor = 0 
    for(let i = 0; i < graph[v].length; i++){
        let next = graph[v][i]
        if(!A[next]){ // 실외끼리 이어져서 또 다른 실외를 만났다면
            if(!visited[next]){
                visited[next] = 1
                indoor += DFS(next) // 그 실외에서 갈 수 있는 모든 실내를 가져옴 (v를 안 거치면서). 그리고 합함
            }
        } else{ // 실내라면
            indoor++
        }
    }

    return indoor // 재귀적으로 실내 갯수를 합할 수 있게.
}

console.log(ans)