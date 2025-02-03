class MinHeap{
    constructor(){
        this.heap = []
    }

    insert(item){
        this.heap.push(item)
        this.#increaseHeap()
    }

    #increaseHeap(){
        let curIdx = this.heap.length-1
        while(curIdx > 0){
            let parentIdx = ~~((curIdx - 1)/2)
            if(this.heap[parentIdx][1] > this.heap[curIdx][1]){
                [this.heap[curIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[curIdx]]
                curIdx = parentIdx
            } else break
        }
    }

    extractMin(){
        if(!this.heap.length) return -1
        else if (this.heap.length === 1) return this.heap.pop()
        let ret = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.#heapify()
        return ret
    }

    #heapify(){
        let curIdx = 0
        while(curIdx < this.heap.length-1){
            let leftChild = curIdx * 2 + 1
            let rightChild = curIdx * 2 + 2
            let minIdx = curIdx

            if(leftChild < this.heap.length && this.heap[leftChild][1] < this.heap[minIdx][1]){
                minIdx = leftChild
            }

            if(rightChild < this.heap.length && this.heap[rightChild][1] < this.heap[minIdx][1]){
                minIdx = rightChild
            }

            if(minIdx === curIdx)break
            else{
                [this.heap[minIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[minIdx]]
                curIdx = minIdx
            }
        }
    }

    size(){
        return this.heap.length
    }
}

const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const N = Number(stdin[0])
const graph = Array(N)
const visited = Array(N)
for(let i = 1; i <= N; i++){
    graph[i-1] = stdin[i].split('').map(Number)
    visited[i-1] = Array(N).fill(0)
}

const minHeap = new MinHeap()
minHeap.insert([[0,0],0])

// 위, 왼, 아, 오
const dy = [-1, 0, 1, 0]
const dx = [0, -1, 0, 1]

const ans = []

while(minHeap.size()){
    let [[y,x], cost] = minHeap.extractMin()

    if(y === N-1 && x === N-1){
        ans.push(cost)
        break
    }

    for(let i = 0; i < 4; i++){
        let dirY = y + dy[i]
        let dirX = x + dx[i]
        if(0 <= dirY && dirY < N && 0 <= dirX && dirX < N && !visited[dirY][dirX]){
            visited[dirY][dirX] = 1
            if(graph[dirY][dirX]){
                minHeap.insert([[dirY,dirX],cost])
            } else {
                minHeap.insert([[dirY,dirX],cost + 1])
            }
        }
    }
}
console.log(ans.reduce((acc,prev)=>
    acc > prev ? prev : acc
).toString())