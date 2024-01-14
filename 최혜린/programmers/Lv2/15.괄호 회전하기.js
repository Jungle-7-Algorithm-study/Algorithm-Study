function solution(s) {
  if (s.length % 2 === 1)
    return 0;
  let cnt = 0;
  let isRight = true;

  for (let i=0; i<s.length; i++) {
    const stack = [];
    isRight = true;
    // rotateS: 왼쪽으로 괄호 옮긴 후 결과
    let rotateS = s.slice(i)+s.slice(0,i);
    for (let word of rotateS) {
      if (word === "(" || word === "{" || word === "[")
        stack.push(word);
      else {
        let leftWord = stack.pop();
        if (word === ")" && leftWord === "(")
          continue;
        if (word === "]" && leftWord === "[")
          continue;
        if (word === "}" && leftWord === "{")
          continue;
        isRight = false;
        break;
      }
    }
    if (isRight)
      cnt++;
  }
  return cnt;
}