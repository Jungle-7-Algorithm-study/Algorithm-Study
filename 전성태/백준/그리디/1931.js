const stdin = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const N = Number(stdin[0])
const times = []
for(let i = 1; i <= N; i++){
    times.push(stdin[i].split(' ').map(Number))
}

times.sort((a,b)=>{
    if(a[1] - b[1] > 0) return 1
    else if(a[1] - b[1] < 0) return -1
    else{
        if(a[0] - b[0] > 0) return 1
        else if(a[0] - b[0] < 0) return -1
        else return 0
    }
})

let count = 1
let end_time = times[0][1]
for(let i = 1; i < N; i++){
    if(times[i][0] >= end_time){
        count++
        end_time = times[i][1]
    }
}

console.log(count)