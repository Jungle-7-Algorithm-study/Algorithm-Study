const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const T = Number(stdin[0])
let visitedArr = []
const ans = Array.from(Array(T),()=>[])
let curIdx = 0
for(let i = 1; i <= T; i++){
    let nums = []
    for(let j = 1; j <= Number(stdin[i]); j++){
        nums.push(j)
    }

    visitedArr = []
    curIdx = i-1
    
    blank(nums)
    ans[curIdx].sort()
    ans[curIdx] = ans[curIdx].join('\n')
}


function blank(nums){
    visitedArr.push(nums.toString())
    if(nums.length <= 1){
        return
    }
    
    checkZero(nums,[])

    for(let i = 0; i < nums.length-1; i++){
        let copyArr = [...nums]
        copyArr.splice(i,2,parseInt(nums[i].toString()+nums[i+1].toString()))
        if(!visitedArr.includes(copyArr.toString())){
            blank(copyArr)
        }
    }
}

function checkZero(nums,calcArr){
    if(calcArr.length === nums.length - 1){
        let sum = nums[0]
        let str = nums[0].toString().split('').join(' ')
        for(let i = 0; i < calcArr.length; i++){
            if(calcArr[i] === '+'){
                sum += nums[i + 1]
            } else{
                sum -= nums[i + 1]
            }
            str += (calcArr[i] + nums[i + 1].toString().split('').join(' '))
        }
        if(sum === 0){
            ans[curIdx].push(str)
        }
        return
    }

    calcArr.push('+')
    checkZero(nums,calcArr)
    calcArr[calcArr.length-1] = '-'
    checkZero(nums,calcArr)
    calcArr.pop()
}

console.log(ans.join('\n\n'))