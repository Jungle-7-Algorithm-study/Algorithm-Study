const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, K] = stdin[0].split(' ').map(Number)
const nums = [...stdin[1]].map(Number)
nums.reverse()
let count = 0;
let stack = []
for(let i = 0; i < N; i++){
    if(count === K) {
        while(nums.length !== 0){
            stack.push(nums.pop())
        }
        break
    }
    let popped = nums.pop()
    if(stack.length === 0) {
        stack.push(popped)
        continue
    }

    if(popped > stack[stack.length-1]){
        while(popped > stack[stack.length-1] && count !== K){
            stack.pop()
            count++
        }
        stack.push(popped)
        continue
    } else{
        if(popped < nums[nums.length-1]){
            count++
            continue
        } else {
            stack.push(popped)
        }
    }

}
while(count !== K){
    let poppop = stack.pop()
    if(stack[stack.length-1] < poppop){
        stack.pop()
        stack.push(poppop)
    }
    count++
}
console.log(stack.join(''))