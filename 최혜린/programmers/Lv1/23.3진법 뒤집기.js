function solution(n) {    
    let ans = parseInt(n.toString(3).split('').reverse().join(''),3)
    return ans;
}

n = 45;
console.log(solution(n));