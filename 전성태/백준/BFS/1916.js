class MinHeap{
    constructor(){
        this.heap = []
        this.length = 0
    }

    insert(item,cost){
        this.heap.push([item,cost])
        this.#increase()
        this.length++
    }

    #increase(){
        let curIdx = this.heap.length-1
        while(curIdx > 0){
            let parentIdx = ~~((curIdx-1)/2)
            if(this.heap[curIdx][1] < this.heap[parentIdx][1])
                [this.heap[curIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[curIdx]]
            else break

            curIdx = parentIdx
        }
    }

    extractMin(){
        if(this.heap.length === 0) return -1
        if(this.heap.length === 1) return this.heap.pop()
        let ret = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.#heapify()
        return ret
    }

    #heapify(){
        let curIdx = 0
        while(curIdx < this.heap.length-1){
            let leftChild = curIdx*2+1
            let rightChild = curIdx*2+2
            let minIdx = curIdx
            if(leftChild < this.heap.length && this.heap[minIdx][1] > this.heap[leftChild][1])
                minIdx = leftChild
            if(rightChild < this.heap.length && this.heap[minIdx][1] > this.heap[rightChild][1])
                minIdx = rightChild
            if(minIdx == curIdx) break
            else{
                [this.heap[curIdx], this.heap[minIdx]] = [this.heap[minIdx], this.heap[curIdx]]
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
const M = Number(stdin[1])
const graph = {}
for(let i = 1; i <= N; i++){
    graph[i] = []
}
for(let i = 2; i < M + 2;i++){
    let [start, end, cost] = stdin[i].split(' ').map(Number)
    graph[start].push([end, cost])
}
const [start, end] = stdin[M+2].split(' ').map(Number)

const queue = new MinHeap()
queue.insert(start,0)

const costArr = Array(N+1).fill(Infinity)
for(let i = 0; i < graph[start].length; i++){
    let [city, cost] = graph[start][i]
    costArr[city] = cost
}

const visited = Array(N+1).fill(0)
 
while(queue.size()){
    let [city, curcost] = queue.extractMin()
    if(visited[city]) continue
    visited[city] = 1

    for(let i = 0; i < graph[city].length;i++){
        let nextCity = graph[city][i][0]
        let nextCost = graph[city][i][1]
        if(!visited[nextCity]){ // 방문 체크 하는 이유 : 이미 방문했다는것은 지금 루트를 통해서 가는것보다 cost가 작다는것. 애초에 시작부터 루트까지가 이미 방문한 cost보다 높다는 것
            queue.insert(nextCity,(curcost + nextCost))
            if(costArr[nextCity] > (curcost + nextCost)) costArr[nextCity] = curcost + nextCost
        }
    }
}

console.log(costArr[end])

