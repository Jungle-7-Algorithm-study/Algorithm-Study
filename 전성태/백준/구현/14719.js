const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [H, W] = stdin[0].split(' ').map(Number)
const block = stdin[1].split(' ').map(Number)

let totalWater = 0;

for (let i = 1; i < W - 1; i++) {
    const leftMaxHeight = [...block.slice(0, i)].reduce((a,b)=>a>b?a:b,0) // 현재 열의 왼쪽에서 제일 높은 블록 탐색
    const rightMaxHeight = [...block.slice(i + 1)].reduce((a,b)=>a>b?a:b,0) // 현재 열의 오른쪽에서 제일 높은 블록 탐색
    const basisHeight = leftMaxHeight > rightMaxHeight ? rightMaxHeight : leftMaxHeight // 둘 중 더 낮은 블록 탐색

    // 현재 블록이 둘 중 더 낮은 블록보다 낮은 경우 = 빗물이 고이는 경우 : 그 차이를 저장
    if (block[i] < basisHeight) totalWater += basisHeight - block[i]; 
}

console.log(totalWater)