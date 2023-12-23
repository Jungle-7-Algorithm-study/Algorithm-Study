function combination(combiArr, combi, myarr){
    if(combi.length === k){
        let completeNum = combi.join('')
        if(!combiArr.includes(completeNum))
            combiArr.push(completeNum)
        return;
        
    }
    for(let i = 0; i < myarr.length; i++){
        if(visited[i]) continue
        combi.push(myarr[i])
        visited[i] = true // 중복 체크를 위한 추가
        combination(combiArr, combi,myarr)
        visited[i] = false // 중복 체크를 위한 추가
        combi.pop()
    }
    return (combiArr)
}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const n = parseInt(input[0])
const k = parseInt(input[1])
const nums = []
const visited = Array(n).fill(false) // 중복 체크를 위한 추가
for(let i = 0; i < n; i++){
    nums.push(parseInt(input[2+i]))
}
const answer = combination([],[],nums)
console.log(answer.length)

