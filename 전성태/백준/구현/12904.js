const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const S = stdin[0].split('')
const T = stdin[1].split('')

let ans = 0

while(true){
    if(T.length === S.length){
        if(checkSame()) ans = 1
        break
    }
    if(T[T.length - 1] === 'A') T.pop()
    else{
        T.pop()
        T.reverse()
    }
}

function checkSame(){
    let same = true
    for(let i = 0; i < T.length; i++){
        if(T[i] !== S[i]){
            same = false
            break
        }
    }
    return same
}

console.log(ans)