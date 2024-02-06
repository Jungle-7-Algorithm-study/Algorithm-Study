function solution(phone_number) {
    let ans = '';

    for (let i = 0; i < phone_number.length - 4; i++)
        ans += '*';

    for (let i = phone_number.length - 4; i <= phone_number.length - 1; i++)
        ans += phone_number[i];

    return ans;
}

// 내 코드가 초라해지는 변태의 코드
function solution(phone_number) {
    let ans = '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
    return ans;
}

phone_number = "01033334321";
console.log(solution(phone_number));