const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const N = Number(stdin[0])
const A = stdin[1].split(' ').map(Number)
const mathArr = stdin[2].split(' ').map(Number)

let ans = []
function DFS(v = 0,math = -1, calc = A[0]){
    switch(math){
        case 0:
            calc += A[v]
            break
        case 1:
            calc -= A[v]
            break
        case 2:
            calc *= A[v]
            break
        case 3:
            if(calc < 0) calc = -(~~(-calc / A[v]))
            else calc = ~~(calc / A[v])
            break
    }
    if(!mathArr.reduce((a,b)=>a+b,0)){
        ans.push(calc)
        return
    }
    for(let i = 0; i < 4; i++){
        if(mathArr[i]){
            mathArr[i]--
            DFS(v+1,i,calc)
            mathArr[i]++
        }
    }
}

DFS()

ans.sort((a,b)=>b-a)
console.log(ans[0]+'\n'+ans[ans.length-1])