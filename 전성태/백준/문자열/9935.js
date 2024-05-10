const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const str = stdin[0]
const bomb = stdin[1]
const stack = []

for(let i = 0; i < str.length; i++){
    if(str[i] !== bomb[bomb.length-1]){
        stack.push(str[i])
    } else {
        let popped = str[i]
        for(let j = 0; j < bomb.length - 1; j++){
            if(stack.length)
                popped = stack.pop() + popped
        }
        if(popped !== bomb){
            for(let k = 0; k < popped.length; k++){
                stack.push(popped[k])
            }
        }
    }
}
if(!stack.length) console.log('FRULA')
else console.log(stack.join(''))

