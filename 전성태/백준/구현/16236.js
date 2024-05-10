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
            if(this.heap[parentIdx][2] > this.heap[curIdx][2]){
                [this.heap[parentIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[parentIdx]]
                curIdx = parentIdx
            } else if(this.heap[parentIdx][2] === this.heap[curIdx][2]){
                if(this.heap[parentIdx][0] > this.heap[curIdx][0]){
                    [this.heap[parentIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[parentIdx]]
                } else if(this.heap[parentIdx][0] === this.heap[curIdx][0]){
                    if(this.heap[parentIdx][1] > this.heap[curIdx][1]){
                        [this.heap[parentIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[parentIdx]]
                    } else break
                 } else break
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
                if(this.heap[leftIdx][2] < this.heap[minIdx][2]){
                    minIdx = leftIdx
                } else if(this.heap[leftIdx][2] === this.heap[minIdx][2]){
                    if(this.heap[leftIdx][0] < this.heap[minIdx][0]){
                        minIdx = leftIdx
                    } else if(this.heap[leftIdx][0] === this.heap[minIdx][0]){
                        if(this.heap[leftIdx][1] < this.heap[minIdx][1]){
                            minIdx = leftIdx
                        }
                    }
                }
            }

            if(rightIdx < this.heap.length){
                if(this.heap[rightIdx][2] < this.heap[minIdx][2]){
                    minIdx = rightIdx
                } else if(this.heap[rightIdx][2] === this.heap[minIdx][2]){
                    if(this.heap[rightIdx][0] < this.heap[minIdx][0]){
                        minIdx = rightIdx
                    } else if(this.heap[rightIdx][0] === this.heap[minIdx][0]){
                        if(this.heap[rightIdx][1] < this.heap[minIdx][1]){
                            minIdx = rightIdx
                        }
                    }
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

const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const N = parseInt(stdin[0])
const graph = Array(N)
let shark = 2
let eat = 0
let sharkPlace
for(let i = 0; i < N; i++){
    graph[i] = stdin[i+1].split(' ').map((e,idx)=>{
        let numE = parseInt(e)
        if(numE === 9) sharkPlace = [i, idx]
        return numE
    })
}

let ansTime = 0

while(true){
    let time = BFS()
    if(time !== -1) ansTime += time
    else break
}

console.log(ansTime)

function BFS(){
    const dy = [-1, 0, 1, 0]
    const dx = [0, -1, 0, 1]
    const visited = Array.from(Array(N),()=>Array(N).fill(0))
    const minHeap = new MinHeap()
    minHeap.insert([...sharkPlace,0])
    graph[sharkPlace[0]][sharkPlace[1]] = 0
    let flag = false
    let totalTime = 0
    while(minHeap.size()){
        let [sy, sx, time] = minHeap.extractMin()

        if(graph[sy][sx] && graph[sy][sx] < shark){
            eat += 1
            if(eat === shark) {
                shark += 1
                eat = 0
            }
            graph[sy][sx] = 0
            sharkPlace = [sy,sx]
            flag = true
            totalTime = time
            break
        }

        for(let i = 0; i < 4; i++){
            let dirY = sy + dy[i]
            let dirX = sx + dx[i]
            if(0 <= dirY && dirY < N && 0 <= dirX && dirX < N){
                if(visited[dirY][dirX] || graph[dirY][dirX] > shark) continue
                minHeap.insert([dirY,dirX,time + 1])
                visited[dirY][dirX] = 1
            }
        }
    }
    if(flag) return totalTime
    else return -1
}

