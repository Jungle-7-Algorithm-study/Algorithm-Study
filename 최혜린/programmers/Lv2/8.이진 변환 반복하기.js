/*
x의 모든 0을 제거 한 후 해당 길이를 2진법으로 표현한 문자열
1. 0 제거
2. 이진 변환 횟수 세기
3. 제거한 0의 갯수 배열에 저장
4. 0을 제외한 문자열 길이 이진수로 변환
*/
function solution(s) {
    // 이진 변환 횟수, 제거한 0의 갯수
    let ans = [0, 0];
    let sLen = 0;

    while (s.length > 1) {
        sLen = s.length;
        s = s.replace(/0/g, "");    // 문자열 내의 모든 0을 빈문자열로 대체 -> /0/g 는 0을 전역으로 찾아서 대체하라는 의미
        ans[0]++; // 이진 변환 횟수 +1
        ans[1] += (sLen - s.length);    // 제거한 0의 갯수 배열에 저장 (더하기)
        s = s.length.toString(2);     // 0을 제외한 문자열 길이를 이진수로 변환하기
    }
    return ans;
}

s = "110010101001";
console.log(solution(s));
