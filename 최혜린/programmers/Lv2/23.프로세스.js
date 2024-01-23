function solution(priorities, location) {
  let ans = 0;
  const arr = priorities.map((priority, idx) => {
    return {priority, idx};
  })

  while (arr.length) {
    const queue = arr.shift();
    // some 사용해서 맨 앞 데이터 하나 꺼낸 뒤 그거보다 큰게 있는지 확인
    // 있으면 뺀거 다시 push
    if (arr.some(item => item.priority > queue.priority)) {
      arr.push(queue);
    }
      // 우선순위 큰 수 없으면 ans++해서 인덱스 증가시킴
    // idx === location 일 때 break
    else {
      ans++;
      if (queue.idx === location)
        break;
    }
  }
  return ans;
}

priorities = [1, 1, 9, 1, 1, 1];
location = 0;
console.log(solution(priorities, location));