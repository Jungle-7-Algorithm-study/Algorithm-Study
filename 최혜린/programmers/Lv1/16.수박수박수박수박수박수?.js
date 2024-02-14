// 가독성 최악
function solution(n) {
  let ans = '';

  if (n%2==0) {
    let s = n/2;
    while(s !== 0) {
      ans += '수박';
      s -= 1;
    }
  }
  else {
    let s = Math.floor(n/2);
    while(s !== 0) {
      ans += '수박';
      s -= 1;
    }
    ans += '수';
  }

  return ans;
}

// 레전드 ..ㅋㅋ
function waterMelon(n){
  let result = "수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박"
  //함수를 완성하세요

  return result.substring(0,n);
}

// 정석
function wm(n) {
  let ans = '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');

  return ans;
}