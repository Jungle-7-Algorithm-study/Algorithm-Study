// 내 풀이

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[0]
let numStr = ''
const arr = []
const stack = []
for(let i = 0; i < input.length; i++){
    let cur = input[i]
    if(cur === '-' || cur === '+'){
        arr.push(Number(numStr))
        numStr = ''
        arr.push(cur)
    } else {
        numStr += cur
    }
}
arr.push(Number(numStr))

while(arr.length){
    let out = arr.shift()
    if(out === '+') {
        stack.push(stack.pop() + arr.shift())
    } else {
        if(out !== '-')
            stack.push(out)
    }
}

console.log(stack.reduce((a,b)=>a-b))



// 다른 사람 풀이 

function sol(input) {
    const numbers = input.plit("-").map((str) => // -를 기준으로 분리해서 분리한 문자열을 모두 탐색
      str.split("+")
         .map(Number)
         .reduce((s, v) => s + v, 0) // +를 기준으로 나눠서 모두 더해준다.
    ); // -를 기준으로 분리된 문자열의 갯수만큼 numbers 배열의 원소 개수가 된다.
    let answer = numbers[0] * 2 - numbers.reduce((s, v) => s + v, 0); // 첫번째 원소에서 나머지 모든 원소를 빼준다.
    // (첫번째 원소 * 2) - 첫번째 원소부터 마지막 원소까지 다 더한 값
    // - 다 더하는 이유는 3 + (-1) = 2 같은 이유.
    // - 첫번째 원소 * 2를 하는 이유는, 첫번째 원소 포함 다 더할거기 때문에 중복되므로 뺴줘야 한다.
    return answer;
  }
  
  require("readline")
    .createInterface(process.stdin, process.stdout)
    .on("line", (line) => {
      console.log(sol(line));
    })
    .on("close", () => {
      process.exit();
    });