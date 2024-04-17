const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, H] = stdin[0].split(' ').map(Number)
const seok = []
const jong = []
for(let i = 1; i <= N/2; i++){
    seok.push(parseInt(stdin[i * 2 - 1]))
    jong.push(parseInt(stdin[i * 2]))
}
seok.sort((a,b)=>a-b)
jong.sort((a,b)=>a-b)

const levelSums = Array(H+1).fill(Infinity)

for(let i = 1; i <= H; i++){
    let seokSum = 0
    let jongSum = 0
    if(seok[seok.length-1] >= i){
        seokSum = lowerBound(seok, 0, seok.length - 1, i)
    }
    if(jong[jong.length-1] >= (H-i+1)){
        jongSum = lowerBound(jong, 0, jong.length - 1, H - i + 1)
    }
    let levelSum = seokSum + jongSum
    levelSums[i] = levelSum
}


let maxBreak = Math.min(...levelSums)
let count = 0
for(let i = 0; i < levelSums.length; i++){
    if(levelSums[i] === maxBreak) count++
}
console.log([maxBreak,count].join(' '))



function lowerBound(arr, start, end, target){
    if(start >= end){
        return arr.length - end
    }

    let middle = ~~((start + (end))/2)

    if(arr[middle] < target){
        return lowerBound(arr, middle + 1, end, target)
    } else {
        return lowerBound(arr, start, middle, target)
    }
}
