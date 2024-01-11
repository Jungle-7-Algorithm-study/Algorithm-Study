function sumArr(arr){
    let sum = 0
    for(let i = 0; i < N-1; i++){
        sum += Math.abs(arr[i + 1] - arr[i])
    }
    return sum
}

function recur(idx){
    for (let i = 0; i < N; i++) {
        if (idx === N) {
            let sum = sumArr(newArr)
            if(sum > max) max = sum
            return
        }
    
        if (!check[i]) {
          check[i] = true;
          newArr.push(A[i]);
          recur(idx + 1);
          check[i] = false;
          newArr.pop();
        }
      }
}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const N = parseInt(input[0])
const A = (input[1].split(' ')).map((num)=>parseInt(num,10))
const newArr = []
const check = new Array(N).fill(false);
let max = 0
recur(0)
console.log(max)
