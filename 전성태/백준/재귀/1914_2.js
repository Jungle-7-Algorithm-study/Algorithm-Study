function hanoi(num, start, end){
    if(num === 1){
        ansArr.push(`${start} ${end}`)
        return
    }

    hanoi(num - 1, start, 6-start-end)
    ansArr.push(`${start} ${end}`)
    hanoi(num - 1, 6-start-end, end)
}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const number = parseInt(input[0])
const ansArr = []
console.log((2n**BigInt(number)-1n).toString())
if(number <= 20){
    hanoi(number,1,3)
    console.log(ansArr.join('\n'))
}
