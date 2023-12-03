const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const nums = input[0]
const numArr = input[1].split(' ')


function is_prime(n){
    let arrList = []
    for(let i = 2;i <= n;i++){
        arrList[i] = i
    }

    for(let i = 2; i <= Math.sqrt(n); i++){
        for(let j = i+1; j <= n; j++){
            if(arrList[j] === 0) continue;
            if(arrList[j]%i === 0) arrList[j] = 0;
        }
    }

    let primeList = []
    for (let i = 2; i<arrList.length; i++){
        if(arrList[i] !== 0) primeList.push(arrList[i])
    }

    return primeList
}

const primes = is_prime(1000)

let count = 0;
for(let i = 0; i < nums; i++){
    if(primes.includes(parseInt(numArr[i])))
        count++;
}

console.log(count)

// 시간 : 176 ms
// 메모리 : 9344 KB


// in 연산자
/*
    [속성 in 객체명]

    var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
    0 in trees; // true를 반환합니다.
    "bay" in trees; // false를 반환합니다. 당신은 배열의 내용이 아닌, 인덱스 값을 명시하여야 합니다.
*/

// includes() 
/*
    배열.includes(검색 문자)

    let test = [1,2,3,4,5,6,7]
    console.log(test.includes(3)) => true

    시간 복잡도 O(n)
*/