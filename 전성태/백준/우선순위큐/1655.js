class MaxHeap{
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
            
            if(this.heap[parentIdx] < this.heap[curIdx]){
                [this.heap[parentIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[parentIdx]]
                curIdx = parentIdx
            } else break
        }
    }

    extract(){
        if(this.heap.length === 0) return -1
        if(this.heap.length === 1) return this.heap.pop()
        let ext = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.#heapify()
        return ext
    }

    #heapify(){
        let curIdx = 0
        while(curIdx < this.heap.length){
            let leftIdx = curIdx * 2 + 1
            let rightIdx = curIdx * 2 + 2
            let maxIdx = curIdx

            if(leftIdx < this.heap.length && this.heap[leftIdx] > this.heap[maxIdx])
                maxIdx = leftIdx

            if(rightIdx < this.heap.length && this.heap[rightIdx] > this.heap[maxIdx])
                maxIdx = rightIdx

            if(curIdx === maxIdx) break
            else{ 
                [this.heap[curIdx], this.heap[maxIdx]] = [this.heap[maxIdx], this.heap[curIdx]]
                curIdx = maxIdx
            }
        }
    }

    peek(){
        return this.heap[0]
    }

    size(){
        return this.heap.length
    }
}

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

    extract(){
        if(this.heap.length === 0) return -1
        if(this.heap.length === 1) return this.heap.pop()
        let ext = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.#heapify()
        return ext
    }

    #heapify(){
        let curIdx = 0
        while(curIdx < this.heap.length){
            let leftIdx = curIdx * 2 + 1
            let rightIdx = curIdx * 2 + 2
            let minIdx = curIdx

            if(leftIdx < this.heap.length && this.heap[leftIdx] < this.heap[minIdx])
                minIdx = leftIdx

            if(rightIdx < this.heap.length && this.heap[rightIdx] < this.heap[minIdx])
                minIdx = rightIdx

            if(curIdx === minIdx) break
            else{ 
                [this.heap[curIdx], this.heap[minIdx]] = [this.heap[minIdx], this.heap[curIdx]]
                curIdx = minIdx
            }
        }
    }

    peek(){
        return this.heap[0]
    }

    size(){
        return this.heap.length
    }
}

const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const N = parseInt(stdin[0])
const maxHeap = new MaxHeap() // 작은 수 그룹 => 작은 수 그룹의 최대값이 중위값
const minHeap = new MinHeap() // 큰 수 그룹
const ans = [parseInt(stdin[1])]
maxHeap.insert(parseInt(stdin[1]))
for(let i = 2; i <= N; i++){ 
    if(parseInt(stdin[i]) > maxHeap.peek()) minHeap.insert(parseInt(stdin[i])) // 중위값 보다 큰 수이면 큰 수 그룹으로
    else maxHeap.insert(parseInt(stdin[i])) // 중위값 보다 작은 수이면 작은 수 그룹으로

    // 큰 수 그룹(MinHeap)의 길이가 작은 수 그룹(MaxHeap)의 길이보다 커지면
    // 큰 수 그룹의 최소값(MinHeap의 루트)을 작은 수 그룹(MaxHeap)으로 보낸다 (중위값 변경)
    if(minHeap.size() > maxHeap.size()){
        maxHeap.insert(minHeap.extract())
    }
    // 작은 수 그룹(MaxHeap)의 길이가 큰 수 그룹(MinHeap)의 길이보다 2개 많으면
    // 작은 수 그룹의 최댓값(최대 힙의 후트, 현재 중위값)을 큰 수 그룹(MinHeap)으로 보낸다 (중위값 변경)
    else if(maxHeap.size() > minHeap.size() + 1){
        minHeap.insert(maxHeap.extract())
    }
    ans.push(maxHeap.peek())
}

console.log(ans.join('\n'))