const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const N = parseInt(stdin[0])
const ans = []

class Node{
    constructor(item){
      this.item = item;
      this.next = null;
    }
}
  
class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(item){
        const node = new Node(item)
        if(!this.head) {
            this.head = node
            this.head.next = null
        } else{
            this.tail.next = node
        }
        this.tail = node
        this.length++
    }

    pop(){
        let popped = -1
        if(this.head){
            popped = this.head.item
            this.head = this.head.next
            this.length--
        }
        return popped
    }

    size(){
        return this.length;
    }

    empty(){
        if(this.length) return 0
        else return 1
    }

    front(){
        if(this.empty()==1) return -1;
        return this.head.item; 
    }

    back(){
        if(this.empty()==1) return -1;
        return this.tail.item; 
    }
}
let queue = new Queue(); 
for(let i = 1; i <= N; i++){
    let cmd = stdin[i].split(' ')
    if(cmd.length === 2){
        queue.push(parseInt(cmd[1]))
    }
    else{
        switch(cmd[0]){
            case 'pop':
                ans.push(queue.pop())
                break
            case 'size':
                ans.push(queue.size())
                break
            case 'empty':
                ans.push(queue.empty())
                break
            case 'front':
                ans.push(queue.front())
                break
            case 'back':
                ans.push(queue.back())
                break
        }
    }
}
console.log(ans.join('\n'))

// 클래스로 큐 자로구조를 만들어서 풀어야 하는 문제이다
// 안그러면 시간초과