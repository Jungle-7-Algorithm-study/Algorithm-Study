const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// 자바스크립트에서는 입력을 받을 때 위와 같은 코드로 받는다.

const str = input[0]
const splited = str.trim().split(' ')
// 자바스크립트에서 앞 뒤 공백 제거할 때는 trim()을 쓴다.

if(splited.length===1 && splited[0] === '')
    console.log(0)
else
    console.log(splited.length)


/*
* 시간 : 152 ms
* 메모리 : 18080 KB
*/