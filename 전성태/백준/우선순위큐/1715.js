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
            if(this.heap[parentIdx] > this.heap[curIdx]){
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
        while(curIdx < this.heap.length){
            let leftIdx = curIdx * 2 + 1
            let rightIdx = curIdx * 2 + 2
            let minIdx = curIdx

            if(leftIdx < this.heap.length && this.heap[leftIdx] < this.heap[minIdx]){
                minIdx = leftIdx
            }

            if(rightIdx < this.heap.length && this.heap[rightIdx] < this.heap[minIdx]){
                minIdx = rightIdx
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

const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const N = stdin[0]
const heap = new MinHeap()
for(let i = 1; i <= N; i++){
    heap.insert(stdin[i])
}

let ans = 0
while(heap.size() > 1){
    let sum = heap.extractMin() + heap.extractMin()
    ans += sum
    heap.insert(sum)
}

console.log(ans.toString())