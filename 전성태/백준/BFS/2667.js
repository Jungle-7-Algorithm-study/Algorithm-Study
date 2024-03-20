const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const N = Number(stdin[0])
const graph = Array(N)
const houseArr = []
const ans = []
for(let i = 0; i < N; i++){
    graph[i] = stdin[i+1].split('').map((num,idx)=>{
        let intNum = Number(num)
        if(intNum) houseArr.push([i,idx])
        return intNum
    })
}
for(let i = 0; i < houseArr.length; i++){
    let [y, x] = houseArr[i]
    if(graph[y][x]){
        ans.push(BFS(y,x))
    }
}

ans.sort((a,b)=>a-b)
console.log(ans.length.toString())
console.log(ans.join('\n'))


function BFS(firstY, firstX){
    // 위 왼 아 오
    const dy = [-1, 0, 1, 0]
    const dx = [0, -1, 0, 1]
    const queue = [[firstY, firstX]]
    const visited = {}
    let count = 1
    while(queue.length){
        let [y, x] = queue.shift()
        graph[y][x]--

        for(let i = 0; i < 4; i++){
            let dirY = y + dy[i]
            let dirX = x + dx[i]

            if(0 <= dirY && dirY < N && 0 <= dirX && dirX < N){
                if(graph[dirY][dirX] && !visited[[dirY,dirX]]){
                    visited[[dirY,dirX]] = true
                    queue.push([dirY, dirX])
                    count++
                }
            }
        }
    }
    return count
}