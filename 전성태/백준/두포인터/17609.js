const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const T = Number(stdin[0])
const strings = []
for(let i = 1; i <= T; i++){
    strings.push(stdin[i])
}

const ans = []
for(let i = 0; i < T; i++){
    ans.push(twoPointer(strings[i], 0, strings[i].length-1))
}

console.log(ans.join('\n'))


function twoPointer(str, start, end, fixed = false){
    if(start > end){
        if(fixed) return 1
        else return 0
    } 

    if(str[start] === str[end]){
        return twoPointer(str, start + 1, end - 1, fixed)
    } 
    
    if(fixed) return 2
    else{
        if(str[start + 1] === str[end]){
            let res = twoPointer(str, start + 1, end, true)
            if(res !== 2) return res
        } 
        if(str[start] === str[end - 1]) { 
            let res = twoPointer(str, start, end - 1, true)
            if(res !== 2) return res
        }
        return 2
    }
}