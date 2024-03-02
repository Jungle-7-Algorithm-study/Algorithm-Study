const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [V, E] = stdin[0].split(' ').map(Number)
const lines = []
for(let i = 1; i <= E; i++){
    const [node1, node2, cost] = stdin[i].split(' ').map(Number)
    lines.push({node1, node2, cost})
}

function find(parent, x){
    if(parent[x] === x){ // 자신의 부모가 자신이다 : 부모가 없다
        return x
    }
    return parent[x] = find(parent, parent[x]) // 재귀적으로 부모를 찾아 들어감
}

function union(parent, a, b){
    const pa = find(parent, a)
    const pb = find(parent, b)
    if(pa < pb){ // 부모를 합칠 땐 일반적으로 '부모가' 더 작은 값 쪽으로 합친다.
        parent[pb] = pa
    } else {
        parent[pa] = pb
    }
}

lines.sort((a, b)=>a.cost-b.cost) // 가중치의 오름차순으로 정렬
const parent = Array.from({length:V+1},(_,i)=>i) // length가 V + 1 이고 index가 배열의 요소가 되는 배열 : 부모 배열
let answer = 0
for(let {node1, node2, cost} of lines){
    if(find(parent, node1) !== find(parent, node2)){ // 부모가 같지 않다면, 즉 연결되어 있지 않다면
        union(parent, node1, node2) // 연결해라
        answer += cost
    }
}

console.log(answer)