const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const str = stdin[0]
const num = stdin[1]

console.log(str[num-1])