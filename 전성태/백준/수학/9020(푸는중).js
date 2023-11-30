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


const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const n = input[0]
let numArr = []
for(let i = 1;i<=n;i++){
    numArr.push(parseInt(input[i]))
}

numArr.forEach((num)=>{
    const primes = is_prime(num)
    let a = 0
    let b = 0

    for(let i = 0; i < primes.length; i++){
        for(let j = i; j<primes.length;j++){
            if((primes[i] + primes[j]) === num){
                a = primes[i]
                b = primes[j]
            }
        }
    }
    console.log(`${a} ${b}`)
})