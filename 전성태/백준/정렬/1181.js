const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const n = input[0]
const wordArr = []
for(let i = 1; i <= n; i++){
    if(!wordArr.includes(input[i]))
        wordArr.push(input[i])
}
wordArr.sort((a,b)=>{
    if(a.length !== b.length)
        return(a.length - b.length)
    else{
        let aArr = a.split('')
        let bArr = b.split('')
        for(let i = 0;i<a.length;i++){
            if(aArr[i] !== bArr[i]){
                return(a.charCodeAt(i) - b.charCodeAt(i))
            }
        }
    }
})
wordArr.forEach((word)=>{
    console.log(word)
})