class MinHeap{
    constructor(){
        this.heap = []
    }

    insert(item){
        this.heap.push(item)
        this.#increase()
    }

    #increase(){
        let curIdx = this.heap.length-1
        while(curIdx > 0){
            let parentIdx = ~~((curIdx - 1) / 2)
            if(this.heap[parentIdx][0] > this.heap[curIdx][0] || (this.heap[parentIdx][0] === this.heap[curIdx][0] && this.heap[parentIdx][1] > this.heap[curIdx][1])){
                [this.heap[parentIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[parentIdx]]
                curIdx = parentIdx
            } else break
        }
    }

    extractMin(){
        if(this.heap.length === 0) return -1
        if(this.heap.length === 1) return this.heap.pop()
        let retItem = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.#heapify()
        return retItem
    }

    #heapify(){
        let curIdx = 0
        while(curIdx < this.heap.length-1){
            let leftIdx = curIdx * 2 + 1
            let rightIdx = curIdx * 2 + 2
            let minIdx = curIdx

            if(leftIdx < this.heap.length){
                if(this.heap[leftIdx][0] < this.heap[minIdx][0] || (this.heap[leftIdx][0] === this.heap[minIdx][0] && this.heap[leftIdx][1] < this.heap[minIdx][1])){
                    minIdx = leftIdx
                }
            }

            if(rightIdx < this.heap.length){
                if(this.heap[rightIdx][0] < this.heap[minIdx][0] || (this.heap[rightIdx][0] === this.heap[minIdx][0] && this.heap[rightIdx][1] < this.heap[minIdx][1])){
                    minIdx = rightIdx
                }
            }

            if(minIdx === curIdx) break
            else {
                [this.heap[curIdx], this.heap[minIdx]] = [this.heap[minIdx], this.heap[curIdx]]
                curIdx = minIdx
            }
        }
    }

    size(){
        return this.heap.length
    }
}

let stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const N = stdin[0];
stdin = stdin.slice(1);
const answer = [];

const heap = new MinHeap();

for (let num of stdin) {
  if (num === 0 && heap.size() === 0) answer.push(0);
  else if (num === 0 && heap.size() !== 0) answer.push(heap.extractMin()[1]);
  else heap.insert([Number(Math.abs(num)), num]);
}

console.log(answer.join("\n"));