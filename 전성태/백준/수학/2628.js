const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
let max = input[0].split(' ')
let max_row = parseInt(max[0])
let max_col = parseInt(max[1])
let row_arr = [0,max_row]
let col_arr = [0,max_col]
const n = parseInt(input[1])
for(let i = 0;i < n; i++){
    let rowcol = input[i+2].split(' ')
    let which = parseInt(rowcol[0])
    let value = parseInt(rowcol[1])
    if(which===0){
        if(row_arr[0] <= value && value <= row_arr[1]){
            if(max_col/2<value){
                max_col = value
                col_arr[1] = value
            }
            else {
                max_col = max_col - value
                col_arr[0] = value
            }
        }
    } else {
        if(col_arr[0] <= value && value <= col_arr[1]){
            if(max_row/2<value){
                max_row = value
                row_arr[1] = max_row
            }
            else {
                max_row = max_row - value
                row_arr[0] = value
            }
        }
    }

}
console.log(max_col*max_row)