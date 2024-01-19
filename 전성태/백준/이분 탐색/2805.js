function recur(start, end, H){
    if(start > end){
        console.log(H.toString())
        return
    }

    let sum = 0n
    for(let i = 0; i < N; i++){
        if(treePark[i] > H)
            sum += treePark[i] - H  
    }


    if(BigInt(sum) === M){
        console.log(H.toString())
        return
    }
    if(BigInt(sum) > M){
        recur(H+1n, end, ~~(((H+1n)+end)/2n))
    } else{
        recur(start, H-1n, ~~((start+(H-1n))/2n))
    }
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M_] = input[0].split(' ').map(Number)
const M = BigInt(M_)
const treePark = input[1].split(' ').map(Number).sort((a,b)=>b-a).map(BigInt)
recur(0n,treePark[0], ~~(treePark[0]/2n))
