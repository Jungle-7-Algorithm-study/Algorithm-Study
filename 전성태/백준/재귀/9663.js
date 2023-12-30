function check(row){
    //같은 열이면 안되고, 대각선상에 있어서도 안 된다.
    for(let i = 0; i < row; i++){
        if(ansArr[i] === ansArr[row] || row - i === Math.abs(ansArr[row] - ansArr[i])){
            return false
        }
    }
    return true
}

function chess(row){
    if(row === n){ // 마지막 행까지 수행하고 여기까지 오면, 찾기 완료
        count++
        return
    }

    for(let i = 0; i < n ; i++){ // 각 행씩 돌며
        ansArr[row] = i // row행 i번째 열에 queen을 놓아본다.
        if(check(row)){//이후 그 행에 두는게 괜찮은지 판단한다.
            chess(row + 1)
        }
    }


}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const n = parseInt(input[0])
const ansArr = Array(n)
let count = 0;
chess(0)
console.log(count)


// 참고 블로그 : https://chanhuiseok.github.io/posts/baek-1/