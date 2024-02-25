function solution(s) {
    let answer = '';
    s = s.split(' ');

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s[i].length; j++) {
            if (j % 2 == 0) {
                answer += s[i][j].toUpperCase();
            }
            else {
                answer += s[i][j].toLowerCase();
            }
        }
        if (i < s.length - 1) {
            answer += ' ';
        }
    }
    return answer;
}

s = "try hello world";
console.log(solution(s));