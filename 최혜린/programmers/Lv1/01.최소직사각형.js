function solution(sizes) {
  let width = [];
  let height = [];

  for (let i=0; i<sizes.length; i++) {
    let current = sizes[i];
    // 가로는 큰 값, 세로는 작은 값으로 고정
    if (current[0] < current[1]) {
      let temp = current[0];
      current[0] = current[1];
      current[1] = temp;
    }
    width.push(current[0]);
    height.push(current[1]);
  }
  return Math.max(...width) * Math.max(...height);
}

