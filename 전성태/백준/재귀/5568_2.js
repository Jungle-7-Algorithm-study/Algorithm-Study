function combi(tempArr,visited){
    if(tempArr.length === k){
        const tempStr = tempArr.join('')
        if(!answerArr.includes(tempStr))
            answerArr.push(tempStr)
        return
    }

    for(let i = 0; i < arr.length; i++){
        if(!visited[i]){
            tempArr.push(arr[i])
            visited[i] = true
            combi(tempArr,visited)
            visited[i] = false
            tempArr.pop()
        }
    }
    return

}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const n = parseInt(input[0])
const k = parseInt(input[1])
const arr = []
const answerArr = []
const visited = Array(n).fill(false)
for(let i = 0; i < n; i++){
    arr.push(input[i+2])
}
combi([],visited)
console.log(answerArr.length)

