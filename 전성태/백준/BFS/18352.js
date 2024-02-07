const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M, K, X] = stdin[0].split(' ').map(Number)
// const graph = Array(N+1).fill([])
const graph = Array.from({length : N + 1}, ()=>[]) //
for(let i = 1; i <= M; i++){
    let [start, end] = stdin[i].split(' ').map(Number)
    graph[start].push(end)
}
let shortest = Array(N+1).fill(30000)
const visited = Array(N + 1).fill(false);
const queue = [[X,0]]
visited[X] = true;
while(queue.length !== 0){
    let [popped, sum] = queue.shift()
    
    if(shortest[popped] > sum) shortest[popped] = sum
    
    if(sum >= K) continue
    else {
        for(let i = 0; i < graph[popped].length; i++){
            const nextNode = graph[popped][i];
            if (!visited[nextNode]) {
                visited[nextNode] = true;
                queue.push([nextNode, sum + 1]);
            }
        }
    }
    
}
let ans = []

for(let i = 1; i <= N; i++){
    if(shortest[i] === K) ans.push(i)
}
if(ans.length === 0) ans.push(-1)
console.log(ans.join('\n'))