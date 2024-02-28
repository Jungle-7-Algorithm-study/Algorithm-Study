class MinHeap{
    constructor(){
        this.heap = []
    }

    insert(item){
        this.heap.push(item)
        this.#increase()
    }

    #increase(){
        let curIdx = this.heap.length - 1
        while(curIdx > 0){
            let parentIdx = ~~((curIdx - 1)/2)
            if(this.heap[curIdx] < this.heap[parentIdx]){
                [this.heap[curIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[curIdx]]
                curIdx = parentIdx
            } else break
        }
    }

    extractMin(){
        if(this.heap.length === 0) return -1
        else if(this.heap.length === 1) return this.heap.pop()
        else {
            let item = this.heap[0]
            this.heap[0] = this.heap.pop()
            this.#heapify()
            return item
        }
    }

    #heapify(){
        let curIdx = 0
        while(curIdx < this.heap.length){
            let leftIdx = curIdx * 2 + 1
            let rightIdx = curIdx * 2 + 2
            let min = curIdx

            if(leftIdx < this.heap.length && this.heap[leftIdx] < this.heap[min]){
                min = leftIdx
            }

            if(rightIdx < this.heap.length && this.heap[rightIdx] < this.heap[min]){
                min = rightIdx
            }

            if(min === curIdx) break
            else {
                [this.heap[min], this.heap[curIdx]] = [this.heap[curIdx], this.heap[min]]
                curIdx = min
            }
        }
    }

    size(){
        return this.heap.length
    }

    peek(){
        return this.heap[0]
    }
}

const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const N = Number(stdin[0])
const heap = new MinHeap()
const array = Array(N)
for(let i = 1; i <= N; i++){
    let eachPerson = stdin[i].split(' ').map(BigInt)
    array[i-1] = eachPerson[0] > eachPerson[1] ? [eachPerson[1],eachPerson[0]] : [eachPerson[0],eachPerson[1]] // (시작 지점, 끝 지점) 크기대로
    // 사무실이 먼저인지 집이 먼지인지는 중요하지 않으니
}
array.sort((a,b)=>{ // 0보다 1 인덱스 먼저 -> 각 거리의 끝부분에 맞춰서 순회 할 것이므로
    if(a[1] - b[1] > 0) return 1
    else if(a[1] - b[1] < 0) return -1
    else { // #(x,x)일 때 우선순위를 정해줌. 
        if(a[0] - b[0] > 0) return 1
        else if(a[0] - b[0] < 0) return -1
        else return 0
    }
})
const d = BigInt(stdin[N+1])
let maxAns = 0

for(let i = 0; i < N; i++){ // 슬라이딩 윈도우(스위핑 알고리즘)
    let rp = array[i][1] // 현재 d 막대의 끝부분이 됨
    let lp = array[i][0] // 집 혹은 사무실의 시작부분

    if(rp - lp <= d){ // d막대보다 짧은건 insert 하고
        heap.insert(lp)
    } else continue // d막대보다 긴건 버린다.

    while(heap.size() !== 0){
        let tmp = heap.peek()
        if(rp - tmp <= d) break 
        else heap.extractMin() // (막대의 끝부분 - 집/사무실 의 시작부분)이 d보다 길면 그건 벗어난거
        // heap 안에는 d막대 범위 내의 집/사무실 있음
    }

    maxAns = Math.max(maxAns, heap.size()) // 최대일 떄를 기억
}

console.log(maxAns)
