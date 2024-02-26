class MaxHeap{
    constructor(){
        this.heap = []
    }

    empty(){
        if(this.heap.length === 0) return 1
        else return 0
    }

    insert(item){
        this.heap.push(item)
        this.increaseVal()
    }

    increaseVal(){
        let curIdx = this.heap.length-1

        while(curIdx > 0){
            let parentIdx = ~~((curIdx - 1) / 2) // 노드 i의 부모노드 인덱스 :⌊i/2⌋
            if(this.heap[curIdx] < this.heap[parentIdx]){ // 현재 노드가 부모 노드보다 클 경우 둘을 스왚한다.
                // let temp = this.heap[curIdx]
                // this.heap[curIdx] = this.heap[parentIdx]
                // this.heap[parentIdx] = temp
                [this.heap[curIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[curIdx]] // JS의 더 쉬운 스왚법
                curIdx = parentIdx // 반복문을 위해
            }
            else break
        }
    }

    extractMax(){
        if(this.heap.length === 0) return 0
        if(this.heap.length === 1) return this.heap.pop()
        let max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapify()
        return max
    }

    heapify(){
        let curIdx = 0
        
        while(curIdx < this.heap.length){
            let leftIdx = 2 * curIdx + 1
            let rightIdx = 2 * curIdx + 2
            let maxIdx = curIdx

            if(leftIdx < this.heap.length && this.heap[curIdx] > this.heap[leftIdx])
                maxIdx = leftIdx
            if(rightIdx < this.heap.length && this.heap[maxIdx] > this.heap[rightIdx])
                maxIdx = rightIdx

            if(maxIdx !== curIdx){
                [this.heap[curIdx], this.heap[maxIdx]] = [this.heap[maxIdx], this.heap[curIdx]]
                curIdx = maxIdx
            } else break
        }
    }
}

const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const N = parseInt(stdin[0])
const ans = []
const maxHeap = new MaxHeap();
for(let i = 1; i <= N; i++){
    let num = parseInt(stdin[i])
    if(num !== 0){
        maxHeap.insert(num)
    } else {
        ans.push(maxHeap.extractMax())
    }
}

console.log(ans.join('\n'))