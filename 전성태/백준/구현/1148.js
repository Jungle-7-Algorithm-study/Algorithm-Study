const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let count = 0
const dictionary = []
const ans = []
while(stdin[count] !== '-'){
    dictionary.push(stdin[count])
    count++
}
count++
while(stdin[count] !== '#'){
    let puzzle = stdin[count]

    let available = []
    
    for(word of dictionary){
        let isOk = true
        let puzzleArr = [...puzzle].sort((a,b)=>a.charCodeAt()-b.charCodeAt())
        let wordArr = [...word].sort((a,b)=>a.charCodeAt()-b.charCodeAt())
        for(let i = 0; i < wordArr.length; i++){
            let count = puzzle.length
            for(let j = 0; j < puzzleArr.length; j++){
                if(puzzleArr[j] === wordArr[i]){
                    puzzleArr[j] = ''
                    break
                }
                count--
            }
            if(!count) {
                isOk = false
                break
            }
        }
        if(isOk) available.push(word)
    }

    let alphabet = new Map()
    let forNone = [...puzzle]
    available.forEach((words)=>{
        let aWord = [...new Set(words)]
        for(let i = 0; i < aWord.length; i++){
            forNone = forNone.filter((e)=>e !== aWord[i])
            if(alphabet.has(aWord[i])){
                alphabet.set(aWord[i], alphabet.get(aWord[i]) + 1)
            } else {
                alphabet.set(aWord[i], 1)
            }
        }
    })

    forNone = [...new Set(forNone)]

    let max = Math.max(...(alphabet.values()))
    let min = Math.min(...(alphabet.values()))
    let maxArr = []
    let minArr = []

    if(available.length === 0){
        maxArr = forNone.sort((a,b)=>a.charCodeAt()-b.charCodeAt())
        max = 0
    } else {
        alphabet.forEach((val,key)=>{
            if(val === max){
                maxArr.push(key)
            } else if (val === min && forNone.length === 0){
                minArr.push(key)
            }
        })
    }

    if(forNone.length !== 0){
        minArr = forNone.sort((a,b)=>a.charCodeAt()-b.charCodeAt())
        min = 0
    }

    ans.push(`${minArr.sort((a,b)=>a.charCodeAt()-b.charCodeAt()).join('')} ${min} ${maxArr.sort((a,b)=>a.charCodeAt()-b.charCodeAt()).join('')} ${max}`)
    
    count++
}

console.log(ans.join('\n'))