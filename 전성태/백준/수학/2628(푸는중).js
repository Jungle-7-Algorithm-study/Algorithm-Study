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
        if(col_arr[0] <= value && value <= col_arr[1]){
            if(max_col/2<value){
                max_col = value
                col_arr[1] = value
            }
            else {
                if(col_arr[1] - value > value - 0)
                    col_arr[0] = value
                else{
                    col_arr[1] = value
                    col_arr[0] = 0
                }
            }
        }
    } else {
        if(row_arr[0] <= value && value <= row_arr[1]){
            if(max_row/2<value){
                max_row = value
                row_arr[1] = max_row
            }
            else {
                if(row_arr[1] - value > value - 0)
                    row_arr[0] = value
                else{
                    row_arr[1] = value
                    row_arr[0] = 0
                }
            }
        }
    }

}
console.log((col_arr[1]-col_arr[0])*(row_arr[1]-row_arr[0]))