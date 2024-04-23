const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M] = stdin[0].split(' ').map(Number)
const chicken = []
const houses = []
const graph = Array.from(Array(N), () => new Array(N))
for(let i = 1; i <= N; i++){
    graph[i-1] = stdin[i].split(' ').map((e,idx)=>{
        let num = parseInt(e)
        if(num === 1) houses.push([i - 1, idx])
        if(num === 2) chicken.push([i - 1, idx])
    })
}

const visited = Array(chicken.length).fill(0)
const cityDists = []

DFS([],0,visited)

function DFS(arr, count, visited){
    if(count === M){
        cityDists.push(getCityChickenDist(arr))
        return
    }

    for(let i = 0; i < chicken.length; i++){
        if(!visited[i]){
            arr.push(chicken[i])
            visited[i] = 1
            DFS(arr, count + 1, [...visited])
            arr.pop()
        }
    }
}

function getCityChickenDist(chickenArr){
    let distArr = []
    houses.forEach(home => {
        let min = Infinity
        chickenArr.forEach((chick)=>{
            let dist = Math.abs(home[0]-chick[0]) + Math.abs(home[1]-chick[1])
            if(dist < min) min = dist
        })
        distArr.push(min)
    });
    return distArr.reduce((a,b)=>a+b,0)
}

console.log(cityDists.reduce((a,b)=>a>b?b:a))