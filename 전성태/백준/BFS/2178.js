const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M] = stdin[0].split(' ').map(Number)
const graph = Array(N)
for(let i = 0; i < N; i++){
    graph[i] = stdin[i+1].split('').map(Number)
}
const queue = [[0,0]]
const dx = [-1, 1, 0, 0] 
const dy = [0, 0, -1, 1]
while(queue.length !== 0){
    let [y, x] = queue.shift()

    for(let i = 0; i < 4; i++){
        let nx = x + dx[i]
        let ny = y + dy[i]

        if(0 <= nx && nx < M && 0 <= ny && ny < N){
            if(graph[ny][nx] === 1){
                    queue.push([ny, nx])
                    graph[ny][nx] = graph[y][x] + 1
            }
        }
    }
}
console.log(graph[N-1][M-1].toString())