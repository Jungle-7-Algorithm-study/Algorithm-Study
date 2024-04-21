const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const T = parseInt(stdin[0])
const ans = []
for(let i = 1; i <= T; i++){
    let command = stdin[i * 3 - 2].split('')
    let arrNum = parseInt(stdin[i * 3 - 1])
    let arr = JSON.parse(stdin[i * 3])

    let isError = false
    let isReversed = false
    let startIdx = 0
    let endIdx = arrNum - 1

    for(let c = 0; c < command.length; c++){
        if(command[c] === 'R'){
            isReversed = !isReversed
        } else {
            if(startIdx > endIdx){
                isError = true
                break
            } else {
                if(isReversed) endIdx--
                else startIdx++
            }
        }
    }

    const ansArr = arr.slice(startIdx, endIdx + 1)

    if(isError) ans.push('error')
    else{
        ans.push(JSON.stringify(isReversed ? ansArr.reverse() : ansArr))
    }
}

console.log(ans.join('\n'))