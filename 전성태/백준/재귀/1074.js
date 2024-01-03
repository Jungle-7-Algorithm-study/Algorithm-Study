function findZ(x, y, length){
    if(length === 1){
        if(x === c && y === r){
            console.log(ans)
        }
        ans++
        return
    }

    let half = length / 2
    if((x <= c && c < x+half) && (y <= r && r < y+half)){
        findZ(x,y,half)
    } else {
        ans += half * half
    }
    if((x + half <= c && c < x + length) && (y <= r && r < y+half)){
        findZ(x + half,y,half)
    } else {
        ans += half * half
    }
    if((x <= c && c < x+half) && (y + half <= r  && r < y + length)){
        findZ(x,y+half,half)
    } else {
        ans += half * half
    }
    if((x + half <= c && c < x + length) && (y + half <= r  && r < y + length)){
        findZ(x+half, y+half, half)
    } else{
        ans += half * half
    }
}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const inpArr = input[0].split(' ')
const n = parseInt(inpArr[0])
const r = parseInt(inpArr[1])
const c = parseInt(inpArr[2])
let ans = 0
findZ(0,0,2**n)