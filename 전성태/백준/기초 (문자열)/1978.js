const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const nums = input[0]
const numArr = input[1].split(' ')

let count = 0;
//에라토스테네스의 체 사용
numArr.forEach((num)=>{
    if(num !== 1){
        let isPrime = true;
        for(let i = 2; i <= Math.sqrt(num); i++){ // Math.sqrt(x) : x의 제곱근
            if(num % i === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            count++;
        }
    }
})

console.log(count)

// 시간 : 164Ms
// 메모리 : 9344KB

