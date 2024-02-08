// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
// let max = input[0].split(' ')
// let row_arr = [0,parseInt(max[0])]
// let col_arr = [0,parseInt(max[1])]
// const n = parseInt(input[1])
// for(let i = 0;i < n; i++){
//     let rowcol = input[i+2].split(' ')
//     let which = parseInt(rowcol[0])
//     let value = parseInt(rowcol[1])
//     if(which===0){
//         if(col_arr[0] <= value && value <= col_arr[1]){
//             if(col_arr[1]/2<value){
//                 col_arr[1] = value
//             }
//             else {
//                 if(col_arr[1] - value > value - 0)
//                     col_arr[0] = value
//                 else{
//                     col_arr[1] = value
//                     col_arr[0] = 0
//                 }
//             }
//         }
//     } else {
//         if(row_arr[0] <= value && value <= row_arr[1]){
//             if(row_arr[1]/2<value){
//                 row_arr[1] = value
//             }
//             else {
//                 if(row_arr[1] - value > value - 0)
//                     row_arr[0] = value
//                 else{
//                     row_arr[1] = value
//                     row_arr[0] = 0
//                 }
//             }
//         }
//     }

// }
// console.log((col_arr[1]-col_arr[0])*(row_arr[1]-row_arr[0]))

// 틀렸습니다.
// 모든 반례 다 되는데 왜 안되는지 모르겠음



const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
let max = input[0].split(' ')
let row_arr = [0,parseInt(max[0])]
let col_arr = [0,parseInt(max[1])]
const n = parseInt(input[1])
for(let i = 0;i < n; i++){
    let rowcol = input[i+2].split(' ')
    let which = parseInt(rowcol[0])
    let value = parseInt(rowcol[1])
    if(which===0)
        col_arr.push(value)
    else 
        row_arr.push(value)
}

row_arr.sort((a,b)=>a-b);
col_arr.sort((a,b)=>a-b);

let max_ans = 0
for(let i = 1; i < col_arr.length; i++){
    for(let j = 1; j < row_arr.length; j++){
        let width =  col_arr[i] - col_arr[i-1]
        let height = row_arr[j] - row_arr[j-1]
        let ans = width * height
        if (ans > max_ans)
            max_ans = ans
    }
}

console.log(max_ans)

// 시간 : 120 ms
// 메모리 : 9596 KB