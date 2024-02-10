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
            this.head.next = null
        } else{
            this.tail.next = node
        }
        this.tail = node
        this.length++
    }

    pop(){
        if(this.head){
            const item = this.head.item
            this.head = this.head.next
            this.length--
            return item
        } else return -1
    }

    size(){
        return this.length
    }
}

const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, K] = stdin[0].split(' ').map(Number)
const queue = new Queue()
for(let i = 1; i <= N; i++){
    queue.push(i)
}

const ans = []

while(queue.size()){
    for(let i = 0; i < K-1; i++){
        queue.push(queue.pop())
    }
    ans.push(queue.pop())
}
console.log(`<${ans.join(', ')}>`)