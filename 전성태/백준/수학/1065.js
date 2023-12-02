const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const n = input[0]
 
let count = 0;
for (let i = 1; i <= n; i++) {
    if (i < 100) {
        count++;
    } else {
        const num = i.toString();
        if (num[0] - num[1] === num[1] - num[2]) {
            count++;
        }
    }
}

console.log(count);

//시간: 188ms
//메모리: 9616KB