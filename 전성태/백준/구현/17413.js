const str = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[0]
let arrStr = [...str]
let toChange = new Map()
let changeIdx = 0
let ignore = false
arrStr.map((e,idx)=>{
    if(e === '<') ignore = true
    else if(e === '>') {
        changeIdx = idx + 1
        ignore = false
    }
    else{
        if(!ignore){
            if(e === ' ') changeIdx = idx + 1
            else{
                if(!toChange.has(changeIdx)){
                    toChange.set(changeIdx,e)
                }
                else {
                    toChange.set(changeIdx, [e,toChange.get(changeIdx)].join(''))
                }
            }
        }
    }
})

toChange.forEach((e,idx)=>{
    if(e){
        for(let i = idx; i < idx + e.length; i++ ){
            arrStr[i] = e[i - idx]
        }
        // arrStr = arrStr.slice(0,idx).join('') + e + arrStr.slice(idx + e.length).join('')
        // 위 방법의 slice는 배열로부터 특정 범위를 **복사**하여 새로운 배열을 만들기 때문에 메모리 초과가 난다.
    }
})

console.log(arrStr.join(''))