const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M, V] = stdin[0].split(' ').map(Number)
const graph = {}
for(let i = 1; i <= M; i++){
    let [a, b] = stdin[i].split(' ').map(Number)
    if(typeof graph[a] !== 'object') graph[a] = Array()
    if(!graph[a].includes(b))graph[a].push(b)
    if(typeof graph[b] !== 'object') graph[b] = Array()
    if(!graph[b].includes(a))graph[b].push(a)
}

for(let child in graph){
    graph[child].sort((a,b)=>b-a)
}

const dfsExplored = []
const stack = [V]
while(stack.length !== 0){
    let popped = stack.pop()
    if(dfsExplored.includes(popped)) continue
    dfsExplored.push(popped)
    if(typeof graph[popped] !== 'object') continue

    for(let i = 0; i < graph[popped].length; i++){
        if(!dfsExplored.includes(graph[popped][i]))
            stack.push(graph[popped][i])
    }
}

console.log(dfsExplored.join(' '))

for(let child in graph){
    graph[child].sort((a,b)=>a-b)
}


const bfsExplored = []
const queue = [V]
while(queue.length !== 0){
    let popped = queue.shift()
    if(bfsExplored.includes(popped)) continue
    bfsExplored.push(popped)
    if(typeof graph[popped] !== 'object') continue

    for(let i = 0; i < graph[popped].length; i++){
        if(!bfsExplored.includes(graph[popped][i]))
            queue.push(graph[popped][i])
    }
}

console.log(bfsExplored.join(' '))