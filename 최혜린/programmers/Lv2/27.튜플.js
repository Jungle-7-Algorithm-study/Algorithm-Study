function solution(s) {
  let ans = new Set();

  // 집합을 배열로 만들어줌
  let numList = s.replace("{{", "").replace("}}", "").split("},{");

  // 길이순으로 정렬 -> 많이 나온 숫자일수록 튜플에서 앞에 위치한 원소
  numList.sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    } else
      return -1;
  });
  console.log(numList);

  // 각 원소들을 배열에 담아줌
  let setList = [];
  for (let i = 0; i < numList.length; i++) {
    setList.push(numList[i].split(","));
  }
  console.log(setList);

  // 각 배열을 순회하며 set(ans)에 넣어준다. -> 이때 들어가는 순서가 튜플의 순서!
  for (let i = 0; i < setList.length; i++) {
    for (let j = 0; j < setList[i].length; j++) {
      ans.add(parseInt(setList[i][j]));
    }
  }

  // set을 Array.from 을 사용해서 배열로 바꿔서 return
  return Array.from(ans);
}

s = "{{2},{2,1},{2,1,3},{2,1,3,4}}";
console.log(solution(s));
