function hannoi(num, start, end){ // num : 원반 개수
    if(num === 1){ //이동할 원반 개수가 하나라면  
        // console.log(start, end) // 그냥 옮기면 된다.
        ansArr.push(`${start} ${end}`)
        return
    }
    // 6-start-end 는 시작기둥과 목표기둥이 아닌 보조기둥을 뜻한다.

    //1단계 : 맨 아래 제일 큰 원반이 목표기둥으로 가야 하므로, 그 위 num - 1개의 원반들을 먼저 보조 기둥으로 옮겨야 한다.
    hannoi(num-1, start, 6-start-end) 
    //2단계 : 1단계에서 전부 옮겼다면, 맨 아래 기둥을 목표 기둥으로 옮긴다. 맨 아래 원반은 이제 없는것과 마찬가지로 생각해도 된다.
    // console.log(start, end) 
    ansArr.push(`${start} ${end}`)
    // 3단계 : 없어진 맨 아래 원반을 제외하고 num-1개의 원반을 옮긴다. num-1개의 원반은 현재 보조기둥에 있으며, 이 보조기둥은 이제 시작기둥이 된다.
    hannoi(num-1, 6-start-end, end) 
}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const number = parseInt(input[0])
// console.log(2**number-1)
console.log((2n ** BigInt(number) - 1n).toString());
const ansArr = []
if(number <= 20){
    hannoi(number,1,3)
    console.log(ansArr.join('\n'))
}


/* 1. 출력을 전부 string으로 통일해야 함
* 2. Number 타입만으로는 모든 수를 다 표현할 수 없다. 따라서 BigInt 를 사용한다.
*    * BigInt 를 사용할 때는 정수 뒤에 n을 붙이거나 BigInt(Number타입) 으로 형 변환한다.
*    * 단 Number는 Number 끼리, BigInt는 BigInt 는 BigInt 끼리 연산이 가능하다.
*/

// https://www.youtube.com/watch?v=FYCGV6F1NuY&t=339s