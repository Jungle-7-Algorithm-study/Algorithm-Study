const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const N = parseInt(stdin[0]) // 보드의 크기 N x N
const K = parseInt(stdin[1]) // 사과의 개수
const appleArr = [] // 사과 위치 배열
for(let i = 2; i < K+2; i++){
    appleArr.push(stdin[i].split(' ').map((num)=>parseInt(num)-1).join(' '))
}
const L = parseInt(stdin[K+2]) // 뱀의 방향 횟수
const dirArr = [] // 뱀의 방향 배열
for(let i = K+3; i < K + 3 + L; i++){
    dirArr.push(stdin[i].split(' ').map((elem, idx)=>idx===0?parseInt(elem):elem))
}

const board = Array(N) // 2차원 배열 보드
for(let i = 0; i < N; i++){
    board[i] = Array(N)
    for(let j = 0; j < N; j++){
        if(appleArr.includes(`${i} ${j}`))
            board[i][j] = 2 // 사과 자리에는 2를
        else board[i][j] = 0 // 빈 공간에는 0을 삽입
    }   
}

const dirX = [1, 0, -1, 0]
const dirY = [0, -1, 0, 1]

// 오 0 위 1 왼 2 아 3 (반시계)
let direction = 0
let time = 0 // 초

function turn(turnDir){
    if(turnDir === 'D'){
        let calc = (direction - 1) % 4
        if(calc === -1) direction = 3 // JS는 마이너스 인덱스가 없으므로
        else direction = calc
    } else {
        direction = (direction + 1) % 4
    }
}

let x = 0
let y = 0
const snake = [[y,x]] // 뱀 큐. 뱀 꼬리 없앨 때 씀
board[y][x] = 1 // 시작에 뱀 위치

while(true){
    time++
    x += dirX[direction]
    y += dirY[direction]

    if(x < 0 || x >= N || y < 0 || y >= N) break // 보드판 밖으로 벗어나면

    if(board[y][x] === 2){ // 현재 위치에 사과 있으면
        board[y][x] = 1 // 현재 위치에 뱀 머리
        snake.push([y,x]) 
        dirArr.forEach(element => { // 방향 전환 확인
            if(element[0] === time){
                turn(element[1])
            }
            return (element[0] === time)
        });
    }

    else if(board[y][x] === 0){ // 현재 위치 아무것도 없으면
        board[y][x] = 1 // 현재 위치 뱀 머리
        snake.push([y,x])
        let [tailY, tailX] = snake.shift() // 뱀 꼬리 하나 줄여야 해서
        board[tailY][tailX] = 0
        dirArr.some(element => { // 방향 전환 확인
            if(element[0] === time){
                turn(element[1])
            }
            return (element[0] === time)
        });
    }

    else break // 뱀이 몸통에 부딛힌 경우
}

console.log(time.toString())