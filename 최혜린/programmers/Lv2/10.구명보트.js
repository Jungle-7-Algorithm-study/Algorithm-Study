// 내 풀이
function solution(people, limit) {
    people.sort((a, b) => (b - a));
    let cnt = 0;
    let left = 0;
    let right = people.length - 1;

    while (left < right) {
        let sum = people[left] + people[right];
        if (sum > limit)
            left++;
        else {
            left++;
            right--;
        }
        cnt++;
    }
    // 계산되지 않은 숫자 남아있다면
    if (left === right)
        cnt++;

    return cnt;
}

// 다른 사람 풀이 (진짜 미쳤다)
function solution(people, limit) {
    people.sort((a,b) => (a-b));
    for (var l = 0, r = people.length - 1; l < r; r--) {
        if (people[l] + people[r] <= limit)
            l++;
    }
    return people.length - l;
}