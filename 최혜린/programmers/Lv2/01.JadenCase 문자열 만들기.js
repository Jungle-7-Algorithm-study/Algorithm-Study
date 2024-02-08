function solution(s) {
  let arr = s.split(' ');

  let res = arr.map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()).join(" ");

  return res.toString();
}

s = "3people unFollowed me";
console.log(solution(s));