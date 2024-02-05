function solution(arr) {
    if (arr.length == 1)
        return [-1];

    let ans = arr.filter(elem => {
        return elem !== Math.min(...arr);
    })
    
    return ans;
}

arr = [1, 4, 6, 8];
console.log(solution(arr));