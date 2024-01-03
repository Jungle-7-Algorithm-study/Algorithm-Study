function check(row){
    for(let i = 0; i < row; i++){
        if(board[i] === board[row] || row - i === Math.abs(board[row]-board[i])){
            return false
        }
    }
    return true
}

function chess(row){
    if(row === n){
        count++
        return
    }

    for(let i = 0; i < n; i++){
        board[row] = i
        if(check(row)){
            chess(row + 1)
        }
    }
}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const n = parseInt(input[0])
const board = Array(n)
let count = 0;
chess(0)

console.log(count)