const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[0]
const N = parseInt(stdin)
const star = Array(N)
for(let i = 0; i < N; i++){
    star[i] = ' '.repeat(N-(i+1)) + '*'.repeat(i + 1)
}
console.log(star.join('\n'))