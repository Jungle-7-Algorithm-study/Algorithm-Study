const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const N = parseInt(stdin[0])
const arr = []
const ans = []
for(let i = 1; i <= N; i++){
    let cmd = stdin[i].split(' ')
    if(cmd.length > 1) arr.push(parseInt(cmd[1]))
    else{
        switch(cmd[0]){
            case 'top':
                if(arr.length === 0) ans.push(-1)
                else ans.push(arr[arr.length-1])
                break
            case 'empty':
                if(arr.length === 0) ans.push(1)
                else ans.push(0)
                break
            case 'size':
                ans.push(arr.length)
                break
            case 'pop':
                if(arr.length === 0) ans.push(-1)
                else{
                    ans.push(arr.pop())
                }
        }
    }
}
console.log(ans.join('\n'))