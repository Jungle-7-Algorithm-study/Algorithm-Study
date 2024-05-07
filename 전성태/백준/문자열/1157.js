const strings = require('fs').readFileSync('/dev/stdin').toString().trim().toLowerCase()
const alphabet = Array(123).fill(0)
for(let i = 0; i < strings.length; i++){
    alphabet[strings[i].charCodeAt()]++
}
let candCount = []
let candIdx = []
for(let i = 0; i < alphabet.length; i++){
    if(alphabet[i]){
        candCount.push(alphabet[i])
        candIdx.push(i)
    }
}

let maxCount = Math.max(...candCount)

let maxIdx = 0
let count = 0
for(let i = 0; i < candCount.length; i++){
    if(candCount[i] === maxCount){
        count++
        maxIdx = candIdx[i]
    } 
}

if(count > 1) console.log('?')
else {
    console.log(String.fromCharCode(maxIdx).toUpperCase())
}
