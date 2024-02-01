const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const T = parseInt(stdin[0])
const arr = []
for(let i = 1; i <= T; i++){
    arr.push(stdin[i].split(''))
}
const ans = []
for(let i = 0; i < T; i++){
    let oneArr = arr[i]
    let stack = []
    let isNo = false
    for(let j = 0; j < oneArr.length; j++){
        switch(oneArr[j]){
            case '(':
                stack.push(oneArr[j])
                break
            case ')':
                if(stack.length === 0) isNo = true
                else stack.pop()
                break
        }
    }
    if(isNo) ans.push('NO')
    else if(stack.length !== 0) ans.push('NO')
    else ans.push('YES')
}
console.log(ans.join('\n'))