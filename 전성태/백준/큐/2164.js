class Node{
    constructor(item){
        this.item = item
        this.next = null
    }
}

class Queue{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(item){
        const node = new Node(item)
        if(!this.head){
            this.head = node
        } else {
            this.tail.next = node
        }
        this.tail = node
        this.length++
    }

    pop(){
        if(this.head) {
            const item = this.head.item
            this.head = this.head.next
            this.length--
            return item
        }
        else {
            return -1
        }
    }

    size(){
        return this.length
    }
}

const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const N = parseInt(stdin[0])
const queue = new Queue()
for(let i = 1; i <= N; i++){
    queue.push(i)
}
while(queue.size() !== 1){
    queue.pop()
    queue.push(queue.pop())
}
console.log(queue.pop().toString())