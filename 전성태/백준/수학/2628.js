const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
let max = input[0].split(' ')
let row_arr = [0,parseInt(max[0])]
let col_arr = [0,parseInt(max[1])]
const n = parseInt(input[1])
for(let i = 0;i < n; i++){
    let rowcol = input[i+2].split(' ')
    let which = parseInt(rowcol[0])
    let value = parseInt(rowcol[1])
    if(which===0){
        if(col_arr[0] <= value && value <= col_arr[1]){
            if(col_arr[1]/2<value){
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
            if(row_arr[1]/2<value){
                row_arr[1] = value
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