function recur(idx){
    let sum = ans.reduce((prev,cur)=>prev+cur,0)
    if(sum > M) return
    else if(ans.length === 3){
        sums.push(sum)
        return
    }

    for(let i = idx; i < intNumArr.length; i++){
        ans.push(intNumArr[i])
        recur(i + 1)
        ans.pop()
    }

}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const N = parseInt(input[0].split(' ')[0])
const M = parseInt(input[0].split(' ')[1])
const numArr = input[1].split(' ')
const intNumArr = numArr.map((num)=>parseInt(num,10))
const ans = []
const sums = []
recur(0)
console.log(sums.reduce((prev,cur)=>{
    return prev > cur ? prev : cur
}))