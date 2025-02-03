const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M] = stdin[0].split(' ').map(Number)
const graph = Array(N)
const virus = []
const empty = []
const answers = []
for(let i = 1; i <= N; i++){
    graph[i-1] = stdin[i].split(' ').map((e,idx)=>{
        let num = parseInt(e)
        if(num === 2){
            virus.push([i-1,idx])
        } else if(num === 0){
            empty.push([i-1,idx])
        }
        return num
    })
}

DFS()

function DFS(arr = [], visited = Array(empty.length).fill(0)){
    if(arr.length === 3){
        let fixedGraph = graph.map(e=>[...e])
        for(let i = 0; i < 3; i++){
            let [y, x] = arr[i]
            fixedGraph[y][x] = 1
        }
        checkNonVirus(fixedGraph)
        return
    }

    for(let i = 0; i < empty.length; i++){
        if(!visited[i]){
            arr.push(empty[i])
            visited[i] = 1
            DFS(arr, [...visited])
            arr.pop()
        }
    }

}

function checkNonVirus(fixedGraph){
    let count = 0
    const visited = Array.from(Array(N),()=> new Array(M).fill(0))
    for(let i = 0; i < virus.length; i++){
        let [y, x] = virus[i]
        if(!visited[y][x]){
            count += BFS(y, x, fixedGraph, visited)
        }
    }
    answers.push(count)
}


function BFS(y,x, fixedGraph, visited){
    // 위 왼 아 오
    const dy = [-1, 0, 1, 0]
    const dx = [0, -1, 0, 1]
    visited[y][x] = 1
    const queue = [[y,x]]
    let popIdx = 0;
    let count = 0;
    while(popIdx < queue.length){
        let [y,x] = queue[popIdx]

        for(let i = 0; i < 4; i++){
            dirY = y + dy[i]
            dirX = x + dx[i]
            if(0 <= dirY && dirY < N && 0 <= dirX && dirX < M){
                if(fixedGraph[dirY][dirX] === 0 && !visited[dirY][dirX]){
                    visited[dirY][dirX] = 1
                    count++
                    queue.push([dirY,dirX])
                }
            }
        }
        popIdx++
    }
    return count
}

console.log(empty.length - answers.reduce((a,b)=>a>b?b:a) - 3)