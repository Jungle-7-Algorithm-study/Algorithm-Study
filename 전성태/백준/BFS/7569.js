const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [M, N, H] = stdin[0].split(' ').map(Number)
let row = 1
const graph = Array(H)
const visited = Array(H)
const queue = []
for(let i = 1; i <= H; i++){
    graph[i-1] = Array(N)
    visited[i-1] = Array(N)
    for(let j = 0; j < N; j++){
        graph[i-1][j] = stdin[row].split(' ').map((tom,idx)=>{
            let parsedTomato = Number(tom)
            if(parsedTomato === 1) queue.push([i-1,j,idx])
            return Number(parsedTomato)
        })
        visited[i-1][j] = Array(M).fill(0)
        row++
    }
}

function DFS(){
    //위, 왼, 아, 오, 앞, 뒤
    const dz = [0, 0, 0, 0, 1, -1]
    const dy = [-1, 0, 1, 0, 0, 0]
    const dx = [0, -1, 0, 1, 0, 0]
    for(let i = 0; i < queue.length; i++){
        let [z,y,x] = queue[i]
        visited[z][y][x] = 1
    }

    let i = 0
    while(queue.length > i){
        let [z,y,x] = queue[i]
        i++
        for(let i = 0; i < 6; i++){
            let dirZ = z + dz[i]
            let dirY = y + dy[i]
            let dirX = x + dx[i]
            if(0 <= dirZ && dirZ < H && 0 <= dirY && dirY < N && 0 <= dirX && dirX < M){
                if(graph[dirZ][dirY][dirX] === 0 && !visited[dirZ][dirY][dirX]){
                    visited[dirZ][dirY][dirX] = 1
                    graph[dirZ][dirY][dirX] = graph[z][y][x] + 1
                    queue.push([dirZ,dirY,dirX])
                }
            }
        }
    }
}

DFS()

const ans = []

function check(){
    for(let z = 0; z < H; z++){
        for(let y = 0; y < N; y++){
            for(let x = 0; x < M; x++){
                if(graph[z][y][x] === 0) return -1
                else ans.push(graph[z][y][x])
            }
        }
    }
}

if(check() !== -1){
    console.log(ans.reduce((a,b)=>a > b ? a : b)-1)
} else console.log(-1)