// 내 코드

function recur(x = 0, y = 0, length = N){
    let sum = 0
    for(let i = y; i < y + length; i++){
        for(let j = x; j < x + length; j++){
            sum += board[i][j]
        }
    }

    if(sum === length*length){
        blue++
        return
    } else if(sum === 0){
        white++
        return
    }

    let half = length/2
    recur(x, y, half)
    recur(x + half, y, half)
    recur(x, y+half, half)
    recur(x + half, y + half, half)
}

const stdin = require('fs').readFileSync('/dev/stdin').toString().trim()
const input = stdin.split('\n').map(v=>v.split(' ').map(Number))
const N = parseInt(input[0])
const board = []
for(let i = 0; i < N; i++){
    board[i] = input[i+1]
}
let blue = 0
let white = 0
recur()
console.log(white)
console.log(blue)

// 시간 : 184 ms
// 메모리 : 10204 KB




// 인터넷 코드

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
// const n = +input[0];
// const paper = input.slice(1).map(v => v.split(" "));
// const size = [128, 64, 32, 16, 8, 4, 2, 1].filter(v => v <= n);
// let white = 0;
// let blue = 0;
// size.forEach(v => {
//     for (let i=0; i<=n-v; i+=v) {
//         for (let j=0; j<=n-v; j+=v) {
//             let color = paper[i][j];
//             let mono = true;
//             outer : for (let x=i; x<i+v; x++) {
//                 for (let y=j; y<j+v; y++) {
//                     if (paper[x][y] === "2" || paper[x][y] !== color) {
//                         mono = false;
//                         break outer;
//                     }
//                 }
//             }
//             if (mono) {
//                 if (color === "0") white++;
//                 else if (color === "1") blue++;
//                 for (let x=i; x<i+v; x++) {
//                     for (let y=j; y<j+v; y++) {
//                         paper[x][y] = "2";
//                     }
//                 }
//             }
//         }
//     }
// });
// console.log(white);
// console.log(blue);

// 시간 : 192 ms
// 메모리 : 20124 KB