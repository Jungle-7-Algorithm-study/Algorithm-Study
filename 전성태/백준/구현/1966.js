const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const T = parseInt(stdin[0])
const ans = []
for(let i = 1; i <= T; i++){
    let [N, M] = stdin[i * 2 - 1].split(' ').map(Number)
    let numCount = []
    let queue = []
    stdin[i * 2].split(' ').map((numStr,idx)=>{
        let priority = parseInt(numStr)
        numCount.push(priority)
        queue.push([priority, idx])
    })

    numCount.sort((a,b)=>a-b)

    let count = 0
    let printCount = 0
    while(count < queue.length){
        let [priority, idx] = queue[count]
        if(priority === numCount[numCount.length-1]){
            printCount++
            if(idx === M){
                ans.push(printCount)
                break
            }
            numCount.pop()
        } else {
            queue.push([priority, idx])
        }

        count++
    }
}

console.log(ans.join('\n'))
