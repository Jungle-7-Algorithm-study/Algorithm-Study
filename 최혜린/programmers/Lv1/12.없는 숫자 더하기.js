function solution(numbers) {
    let ans = 0;
    
    for (let i = 0; i < 10; i++) {
        if (!numbers.find(elem => elem == i)) {
            console.log(!numbers.find(elem => elem == i));
            ans += i;
        }
    }

    return ans;
}

// 레전드 변태 코드
function solution(numbers) {
    return 45 - numbers.reduce((a, b) => (a + b), 0);
}

numbers = [1, 2, 3, 4, 6, 7, 8, 0];
console.log(solution(numbers));