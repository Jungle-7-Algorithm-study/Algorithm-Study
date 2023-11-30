//첫 번째 시도 => 실패

// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')[0]

// let strArr = input.split(' ')
// a = strArr[0]
// b = strArr[1]
// v = strArr[2]

// let cur = 0;
// let count = 0;

// while(cur < v){
//     console.log('a: '+a)
//     cur = cur + a;
//     console.log('1: '+cur)
//     count++;
//     if(cur >= v)
//         break
//     cur = cur - b
//     console.log('2: '+cur)
//  }

//  console.log(count)



// 정답 확인함
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')[0]

let strArr = input.split(' ')
a = strArr[0]
b = strArr[1]
v = strArr[2]
console.log(Math.ceil((v - b) / (a - b)));
// (climb - slipped) x days + slipped* = height
//  Math.ceil 은 소수값이 존재할 때 값을 올리는 역활을 하는 함수