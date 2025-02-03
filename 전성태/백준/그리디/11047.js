// 내 풀이

const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let [N, K] = stdin[0].split(' ').map(Number)
let A = []
for(let i = 1; i <= N; i++){
    let coin = Number(stdin[i])
    if(coin <= K)
        A.push(coin)
}
A = A.reverse()

let i = 0
let count = 1
while(true){
    if(K - A[i] < 0){
        i++
        continue
    }
    if(K - A[i] === 0){
        break
    }
    K = K-A[i]
    count++
}

console.log(count)


// 다른 사람 풀이

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, ...arr] = input;
let [num, price] = n.split(' ');
price = Number(price);
arr = arr.map(i => Number(i));
solution(n, price, arr);

function solution(n, price, arr){
    let result = 0;
    for(let i=arr.length-1 ; i >= 0 ; i--){
        if(price - arr[i] >= 0){
            result += Math.floor(price/arr[i]);
            price = price%arr[i];
        }
    }
    console.log(result);
}