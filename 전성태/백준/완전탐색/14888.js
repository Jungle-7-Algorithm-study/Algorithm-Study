//내 코드

function operToArr(){
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < operArr[i]; j++){
            if(i === 0){
                convertedOper.push('+')
            } else if(i === 1){
                convertedOper.push('-')
            } else if(i === 2){
                convertedOper.push('x')
            } else{
                convertedOper.push('%')
            }
        }
    }
}

function recur(idx){
    if(idx === N-1){
        if(!results.includes(sum))
            results.push(sum)
        return
    }

    for(let i = 0; i < N-1; i++){
        if(!check[i]){
            check[i] = true
            // possibleArr.push(convertedOper[i])
            let prevSum = sum
            if(convertedOper[i] === '+'){
                sum = sum + numArr[idx+1]
            } else if(convertedOper[i] === '-'){
                sum = sum - numArr[idx+1]
            } else if(convertedOper[i] === 'x'){
                sum = sum * numArr[idx+1]
            } else{
                if(sum<0){
                    sum = Math.floor((sum*-1) / numArr[idx+1])*-1
                }
                else sum = Math.floor(sum / numArr[idx+1])
            }
            recur(idx + 1)
            sum = prevSum
            check[i] = false
        }
    }
}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const N = parseInt(input[0])
const numArr = input[1].split(' ').map(num=>parseInt(num,10))
const operArr = input[2].split(' ').map(num=>parseInt(num,10))
const convertedOper = []
const results = []
const check = Array(N-1).fill(false)
let sum = numArr[0];
operToArr()
recur(0)
results.sort((a,b)=>a-b)
console.log(results[results.length-1].toString())
console.log(results[0].toString())

//메모리 : 15076 KB
//시간 : 7796 ms




//인터넷 정답 코드

// const stdin = require('fs').readFileSync('/dev/stdin').toString().trim();
// const input = stdin.split('\n').map(v => v.split(' ').map(Number));
// const [N, A, operators] = input;

// const calculate = [
//   (a, b) => a + b,
//   (a, b) => a - b,
//   (a, b) => a * b,
//   (a, b) => ~~(a / b)
// ];

// let max = -1_000_000_000;
// let min = 1_000_000_000;

// const dfs = (count = 0, result = A[0]) => {
//   if (count === N - 1) {
//     max = Math.max(max, result);
//     min = Math.min(min, result);
//   } else {
//     for (let i = 0; i < 4 ; i++) {
//       if (!operators[i]) {
//         continue;
//       }
//       operators[i]--;
//       dfs(count + 1, calculate[i](result, A[count + 1]));
//       operators[i]++;
//     }
//   }
// };

// dfs();
// console.log(max);
// console.log(min);

//메모리 : 11904 KB
//시간 : 220 ms