function binarySearch(start, end, a){
    if(start > end){ // 동물과 가장 가까운 사냥꾼의 x좌표와 동물의 x 좌표가 다를 경우 
        if(start > xArr.length-1) start = start - 1 // (start가 사냥꾼 배열의 크기를 넘은 경우)
        return start
    }
    
    let middle = ~~((start + end)/2)
    
    if(xArr[middle] === a){ // 동물과 가장 가까운 사냥꾼의 x좌표와 동물의 x 좌표가 같을 경우
        return middle
    } else if (xArr[middle] < a){
        return binarySearch(middle + 1, end, a)
    } else {
        return binarySearch(start, middle-1, a)
    }
}

const stdin = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [M, N, _L] = stdin[0].split(' ').map(Number)
const L = BigInt(_L)
const xArr = stdin[1].split(' ').map(BigInt)
xArr.sort((a,b)=>{ // 사냥꾼 위치 정렬
    if(a-b>0n) return 1
    else if (a-b<0n) return -1
    else return 0n
})
const animals = []
for(let i = 0; i < N; i++){
    animals.push(stdin[i + 2].split(' ').map(BigInt))
}

let ans = 0

animals.forEach(animal => { // 각 동물의 위치를 완탐하면서 
    let a = animal[0]
    let b = animal[1]
    let middle = binarySearch(0,xArr.length-1,a) // 해당 동물의 위치에서 가장 가까운 사냥꾼의 위치를 이분탐색 (x좌표에 대해서만)
    let howFar = (xArr[middle]-a) < 0n ? (-1n * (xArr[middle]-a) + b) : ((xArr[middle]-a) + b)
    
    if(howFar <= L) ans++
    // 동물과 가장 가까운 사냥꾼의 x좌표와 동물의 x 좌표가 다를 경우도 있기 때문에 이분 탐색으로 뽑은 사냥꾼의 좌우도 확인
    else if(middle + 1 < xArr.length && ((xArr[middle+1]-a) < 0n ? (-1n * (xArr[middle+1]-a) + b) : ((xArr[middle+1]-a) + b)) <= L) ans++
    else if(middle - 1 >= 0 && ((xArr[middle-1]-a) < 0n ? (-1n * (xArr[middle-1]-a) + b) : ((xArr[middle-1]-a) + b)) <= L) ans++
});

console.log(ans.toString())