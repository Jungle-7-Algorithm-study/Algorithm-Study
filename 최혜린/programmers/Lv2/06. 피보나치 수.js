// 재귀 -> 시간 초과. js는 호출 스택의 크기에 제한을 두고 있어서 초과하게 됨
// 피보나치 수열을 효율적으로 계산하기 위헤서는 재귀 호출 대신 반복문이나 메모이제이션
function solution(n) {
    if (n < 2) {
        return n % 1234567;
    }

    let a = 0;
    let b = 1;
    let temp;

    for (let i = 2; i <= n; i++) {
        temp = (a + b) % 1234567;
        a = b;
        b = temp;
    }
    return b;
}

console.log(solution(99999));