const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const nums = input[0].split(' ')
const new_nums = []

nums.forEach((e)=>{
    let reversed = ''
    for(i = e.length-1;i >=0 ;i--){
        reversed += e[i]
    }
    new_nums.push(reversed)
})

console.log(Math.max(...new_nums))
// python의 max는 여기서는 Math.max(...배열)


/*
* 시간 : 160 ms
* 메모리 : 31256 KB
*/



/* 다른 사람의 풀이 방법

let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let numArr = input[0].split(' ');
let num1 = Number(numArr[0].split('').reverse().join(''));
let num2 = Number(numArr[1].split('').reverse().join(''));

(num1 > num2 ? console.log(num1) : console.log(num2))
*/
