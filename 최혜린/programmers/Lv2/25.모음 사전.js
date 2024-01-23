// flag 세워서 해결하는 코드
function solution(word) {
  let list = ['A', 'E', 'I', 'O', 'U'];
  let cnt = -1;
  let flag = false;

  // 단어 만드는 dfs
  function dfs(currWord) {
    if (!flag) {
      cnt++;
      if (currWord === word) {
        flag = true;
        return;
      }
      else if (currWord.length <5 && currWord !== word) {
        for (let i = 0; i < list.length; i++) {
          dfs(`${currWord}${list[i]}`);
        }
      }
      else
        return;
    }
  }

  dfs('');
  return cnt;
}

// 시간 복잡도 장난 아니게 높은 코드
// function solution(word) {
//   const list = ['A', 'E', 'I', 'O', 'U'];
//   const dict = []; // 만든 단어 담을 배열
//
//   function dfs(level, currWord) {
//     dict.push(currWord); // 맨처음 호출시 '' 들어감
//
//     for (let i = 0; i < list.length; i++) {
//       if (level < list.length) {
//         dfs(level + 1, currWord + list[i]);
//       }
//     }
//   }
//
//   dfs(0, '');
//   return dict.findIndex(item => item === word); // 몇번 째 단어인지 검색하기
// }

word = "AAAAE";
console.log(solution(word));