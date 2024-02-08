function solution(seoul) {
  for (idx in seoul) {
    if (seoul[idx] === 'Kim')
      return `김서방은 ${idx}에 있다`;
  }
  // for.. in 문 대신 indexOf("") 사용하는 방법도 있음
  // let i = seoul.indexOf('Kim');
}

seoul = ["Jane", "Kim"];
console.log(solution(seoul));