function solution(phone_book) {
  let ans = true;
  phone_book.sort();
  console.log(phone_book);
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i] === phone_book[i + 1].substring(0, phone_book[i].length)) {
      ans = false;
    }
  }
  return ans;
}

// 변태의 코드
// function solution(phone_book) {
//   return !phone_book.sort().some((num, idx) => {
//     // 마지막 요소까지 확인했다면 false
//     if (idx === phone_book.length-1)
//       return false;
//     // 다음 번호가 현재 번호로 시작하는지 확인
//     return phone_book[idx+1].startsWith(phone_book[idx])
//   });
// }

phone_book = ["12", "123", "1235", "567", "88"];
console.log(solution(phone_book));