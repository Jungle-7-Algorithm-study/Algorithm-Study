function solution(k, tangerine) {
  const freq = new Map();
  tangerine.forEach((item) => {
    // 이미 해당 귤크기의 빈도수가 맵에 기록되어 있다면 1 더해줌
    if (freq.has(item)) {
      freq.set(item, freq.get(item) + 1);
    }
    // 처음 기록하는 귤크기라면 (맵에 기록되어 있지 않음)
    else {
      freq.set(item, 1);
    }
  });

  let cnt = 0;
  // 빈도수 값만 내림차순 정렬해서 val 배열에 담음
  // 어떤 종류를 담는지 중요하지 않으므로 key는 제외하고 value만 별도로 빼준 것!
  const val = Array.from(freq.values()).sort((a, b) => (b - a));

  for (let i = 0; i < val.length; i++) {
    if (k <= 0)
      break;
    k -= val[i];
    cnt++;
  }
  return cnt;
}