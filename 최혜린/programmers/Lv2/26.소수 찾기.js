// 소수: 1보다 큰 자연수 중 1과 자기 자신만을 약수로 가지는 수
function solution(numbers) {
  const numArr = numbers.split("");
  let set = new Set();

  dfs(set, numArr, '');

  return set.size;
}

// 소수 판별
function isPrime(num) {
  if (num < 2)
    return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0)
      return false;
  }
  return true;
}

// 탐색하여 만들어낸 숫자가 소수일 경우 set에 push
function dfs(set, numArr, fixed) {
  if (numArr.length >= 1) {
    for (let i = 0; i < numArr.length; i++) {
      let newFixed = fixed + numArr[i];
      let newArr = [...numArr];
      newArr.splice(i, 1);

      if (isPrime(parseInt(newFixed))) {
        set.add(parseInt(newFixed));
      }
      dfs(set, newArr, newFixed);
    }
  }
}

numbers = "17";
console.log(solution(numbers));