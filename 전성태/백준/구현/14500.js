const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M] = stdin[0].split(' ').map(Number)
const graph = Array(N)
for(let i = 0; i < N; i++){
    graph[i] = stdin[i + 1].split(' ').map(Number)
}

// 위 왼 아 오
const dy = [-1, 0, 1, 0]
const dx = [0, -1, 0, 1]

const tetrominos = {
    1 : [[0, 0, 0]],
    2 : [[0, 1, 2]],
    3 : [[2, 2, 3],[3, 0, 0]], // 기본, y축 대칭
    4 : [[2, 3, 2],[2, 1, 2]],
    5 : [[3, 2, 0, 3]],
}

const sums = new Set()

for(let tetromino in tetrominos){
    for(let y = 0; y < N; y++){ // 시작 y좌표
        for(let x = 0; x < M; x++){ // 시작 x좌표
            for(let rotate = 0; rotate < 4; rotate++){ // 회전 -> '1'에 대해 [+0 : 위, 위, 위], [+1 : 윈, 윈, 윈], ...
                for(let flip = 0; flip < tetrominos[tetromino].length; flip++){ // 기본, y축 대칭
                    let ansSum = searchGraph(y, x, rotate, tetromino, flip, false) 
                    if(ansSum) sums.add(ansSum)
                    let reverseSum = searchGraph(y, x, rotate, tetromino, flip, true) // (기본, y축 대칭) 의 대칭
                    if(reverseSum) sums.add(reverseSum)
                }
            }
        }
    }
}

function searchGraph(startY, startX, rotate, tetromino, idx, reverse){
    let thisTertromino
    if(reverse) thisTertromino = [...tetrominos[tetromino][idx]].reverse()
    else thisTertromino = tetrominos[tetromino][idx]
    let sum = graph[startY][startX]
    let y = startY
    let x = startX
    for(let block = 0; block < thisTertromino.length; block++){
        let caseY = dy[(thisTertromino[block] + rotate) % 4]
        let caseX = dx[(thisTertromino[block] + rotate) % 4]
        let dirY = y + caseY
        let dirX = x + caseX
        if(0 <= dirY && dirY < N && 0 <= dirX && dirX < M){
            if(!(tetromino === '5' && block === 2))
                sum += graph[dirY][dirX]
            y = dirY
            x = dirX
        } else{
            sum = 0
            break
        }
    }
    return sum
}

console.log([...sums].reduce((a,b)=>a>b?a:b))