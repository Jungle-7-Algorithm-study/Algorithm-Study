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

phone_book = ["12", "123", "1235", "567", "88"];
console.log(solution(phone_book));