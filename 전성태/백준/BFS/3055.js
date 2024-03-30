const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [R,C] = stdin[0].split(' ').map(Number)
const graph = Array(R)
let gosum
let waterStart = []
for(let i = 1; i <= R; i++){
    graph[i-1] = stdin[i].split('').map((e,idx)=>{
        if(e === 'S') gosum = [i-1,idx]
        else if(e === '*') waterStart.push([[i-1,idx],0])
        return e
    })
}

console.log(BFS(waterStart, gosum[0], gosum[1]))

function BFS(waterStart, gy, gx){
    // 위, 왼, 아, 오
    const dy = [-1, 0, 1, 0]
    const dx = [0, -1, 0, 1]
    const waterQueue = [...waterStart]
    const goQueue = [[[gy, gx],0]]
    let day = 0 
    let ans = []
    while(goQueue.length){
        while(waterQueue.length && waterQueue[0][1] === day){
            let [[wy, wx],] = waterQueue.shift()
            
            for(let i = 0; i < 4; i++){
                let dirY = wy + dy[i]
                let dirX = wx + dx[i]
                if(0 <= dirY && dirY < R && 0 <= dirX && dirX < C){
                    if(graph[dirY][dirX] === '.' || graph[dirY][dirX] === 'S'){
                        graph[dirY][dirX] = '*'
                        waterQueue.push([[dirY, dirX],day+1])
                    }
                }
            }
        }

        while(goQueue.length && goQueue[0][1] === day){
            let [[gy, gx], today] = goQueue.shift()
            if(graph[gy][gx] === "D"){
                ans.push(today)
            }
            
            for(let i = 0; i < 4; i++){
                let dirY = gy + dy[i]
                let dirX = gx + dx[i]
                if(0 <= dirY && dirY < R && 0 <= dirX && dirX < C){
                    if(graph[dirY][dirX] === '.' || graph[dirY][dirX] === "D"){
                        if(graph[dirY][dirX] !== "D")graph[dirY][dirX] = 'S'
                        goQueue.push([[dirY, dirX],today+1])
                    }
                }
            }
        }
        
        day++
    }
    if(!ans.length) return 'KAKTUS'
    return ans.reduce((a,b)=>a>b?b:a).toString()
}

