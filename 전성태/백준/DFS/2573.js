const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M] = stdin[0].split(' ').map(Number)
const graph = Array(N)
const visited = Array(N)
let count = 0
for(let i = 0; i < N; i++){
    graph[i] = stdin[i+1].split(' ').map((e)=>{ // 0이 아닌 값, 즉 빙산의 갯수를 count
        let num = Number(e)
        if(num) count++
        return num
    })
    visited[i] = Array(M).fill(-1) // 방문 노드 리스트. year로 값을 줄 것이며, year는 0부터이므로 -1로 채움
}

// 아, 왼, 위, 오 (반시계)
const dx = [0, -1, 0, 1]
const dy = [1, 0, -1, 0]
let year = 0 // 현재 year
let refresh = [] // DFS를 다 돈 후 이 리스트를 이용해 graph와 count를 업데이트 할 예정

function DFS(y, x){
    let foundCnt = 0 // DFS 를 돌며 찾은 빙산 갯수를 저장할 변수
    visited[y][x] = year // visited에 year를 줌
    
    let aroundCnt = 0 // 한 빙산 주변이 물인 방향의 갯수
    for(let i = 0; i < 4; i++){
        let dirY = dy[i] + y // 이동할 y좌표
        let dirX = dx[i] + x // 이동할 x좌표
        if(0 <= dirY && dirY < N && 0 <= dirX && dirX < M){
            if(graph[dirY][dirX]){ // 0이 아닐 때
                if(visited[dirY][dirX] !== year){ // 올해에는 아직 방문을 안 했을 떄
                    foundCnt++ // 찾은 빙산 수 + 1
                    foundCnt += DFS(dirY, dirX)
                }
            } else { // 0이면, 즉 주변이 바다면
                aroundCnt++
            }
        }
    }
    refresh.push([aroundCnt,y,x]) // DFS 끝나고 graph와 Count 업뎃 예정

    return foundCnt
}

function findStart(){ // DFS 탐색 시작 지점 찾기 위해
    for(let i = 0; i < N; i++){
        for(let j = 0; j < M; j++){
            if(graph[i][j]){
                return [i, j]
            }
        }
    }
    return [-1, -1]
}

while(true){
    let [y, x] = findStart() // 시작 지점 x, y
    if(y === -1 && x === -1) {
        year = 0
        break
    }
    refresh = [] // 이번 년도 refresh 배열 초기화
    let foundCnt = DFS(y,x)+1 // DFS를 돌려 찾은 빙산 수 + 자기 자신
    if(count !== foundCnt) break // fountCnt 가 전체 빙산의 수와 다르면 한 덩어리가 아니므로 break
    refresh.forEach((e) => { // 올해 녹은 빙산을 graph에 적용하고 그 count를 갱신
        let aroundCnt = e[0]
        let y = e[1]
        let x = e[2]
        if(graph[y][x] - aroundCnt <= 0) {
            graph[y][x] = 0
            count--
        } 
        else graph[y][x] -= aroundCnt
    })
    year++ // 1년 증가
}

console.log(year)