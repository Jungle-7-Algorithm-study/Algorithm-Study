class Node{
    constructor(item){
        this.item = item
        this.next = null
        this.prev = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(item){
        const node = new Node(item)
        if(!this.head){
            this.head = node
        } else {
            this.tail.next = node
            node.prev = this.tail
        }
        this.tail = node
        this.length++
    }

    popFront(){
        if(!this.head) return -1
        let ret = this.head.item
        if(this.length === 1){
            this.head = null
            this.tail = null
            this.length--
            return ret
        }
        this.head.next.prev = null
        this.head = this.head.next
        this.length--
        return ret
    }

    popBack(){
        if(!this.tail) return -1
        let ret = this.tail.item
        if(this.length === 1){
            this.head = null
            this.tail = null
            this.length--
            return ret
        }
        this.tail.prev.next = null
        this.tail = this.tail.prev
        this.length--
        return ret
    }

    size(){
        return this.length
    }
}

const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const T = parseInt(stdin[0])
const ans = []
for(let i = 1; i <= T; i++){
    let command = stdin[i * 3 - 2].split('')
    let arrNum = parseInt(stdin[i * 3 - 1])
    let arr = stdin[i * 3].replace('[','').replace(']','').split(',')
    if(arr.length === 1 && arr[0] === ''){
        arr = []
    }

    const queue = new LinkedList()
    for(let i = 0; i < arr.length; i++){
        queue.push(arr[i])
    }

    let isError = false
    let isReversed = false
    for(let c = 0; c < command.length; c++){
        if(command[c] === 'R'){
            isReversed = !isReversed
        } else {
            if(queue.size() === 0){
                ans.push('error')
                isError = true
                break
            } else {
                if(isReversed) queue.popBack()
                else queue.popFront()
            }
        }
    }

    let ansArr = []
    while(queue.size()){
        if(isReversed) ansArr.push(queue.popBack())
        else ansArr.push(queue.popFront())
    }
    
    if(ansArr.length) ans.push(`[${ansArr.join(',')}]`)
    else if(!isError) ans.push('[]')
}

console.log(ans.join('\n'))