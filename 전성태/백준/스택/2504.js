const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const val = stdin[0].split('')
const stack = []
let isZero = false
for(let i = 0; i < val.length; i++){
    let cur = val[i]
    if(cur === '(' || cur === '['){
        stack.push(cur)
    }
    else {
        if(stack.length !== 0){
            let popped = stack.pop()
            let sum = 0
            while(typeof popped === "number"){
                sum += popped
                popped = stack.pop()
            }
            if(cur === ')'){
                if(popped === '('){
                    if(!sum) stack.push(2)
                    else {
                        stack.push(sum*2)
                    }
                }
                else{
                    isZero = true
                    break
                }
            }
            else{
                if(popped === '['){
                    if(!sum) stack.push(3)
                    else {
                        stack.push(sum*3)
                    }
                }
                else{
                    isZero = true
                    break
                }
            }
        } else {
            isZero = true
            break
        }
    }
}

for(let i = 0; i < stack.length; i++){
    if(typeof stack[i] !== "number"){
        isZero = true
        break
    }
}
if(isZero) console.log(0)
else console.log(stack.reduce((a,b)=>a+b,0))