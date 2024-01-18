//방법 1
function recur(start, end, search){
    if(start === end){
        if(A[start] === search)
            res.push(1)
        else   
            res.push(0)
        return
    }

    let middle = ~~((start + end)/2)
    if(A[middle] >= search)
        recur(start, middle, search)
    else
        recur(middle + 1, end, search)
}

const stdin = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const N = parseInt(stdin[0])
const A = stdin[1].split(' ').map(Number)
const M = parseInt(stdin[2])
const Nums = stdin[3].split(' ').map(Number)
A.sort((a,b)=>a-b)
const res = []
for(let i = 0; i < M; i++){
    recur(0,N-1,Nums[i])
}

console.log(res.join('\n'))


//방법 2
// function recur(start, end, search){
//     if(start > end){
//         res.push(0)
//         return
//     }

//     let middle = ~~((start + end)/2)
//     if(A[middle] === search){
//         res.push(1)
//         return
//     }
//     else if(A[middle] > search){
//         recur(start, middle - 1, search)
//     } else {
//         recur(middle + 1, end, search)
//     }
// }

// const stdin = require('fs').readFileSync('/dev/stdin').toString().split('\n')
// const N = parseInt(stdin[0])
// const A = stdin[1].split(' ').map(Number)
// const M = parseInt(stdin[2])
// const Nums = stdin[3].split(' ').map(Number)
// A.sort((a,b)=>a-b)
// const res = []
// for(let i = 0; i < M; i++){
//     recur(0,N-1,Nums[i])
// }

// console.log(res.join('\n'))