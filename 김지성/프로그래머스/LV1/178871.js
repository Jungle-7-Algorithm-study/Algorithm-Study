function solution(players, callings) {

  {/** 아니 이거 왜 이건 안되고 밑에꺼는 되는거야 노이해 숫자가 문자열보다 더 빨라서 그런건가*/}
  // callings.forEach(calling => {
  //   const index = players.indexOf(calling);
  //   if (index > 0){
  //     [players[index],players[index - 1]] = [players[index - 1], players[index]]
  //   }
  // })


  // indexMap으로 처음 players들의 순서를 번호로 기록함
  const indexMap = {};
    players.forEach((player, index) => {
    indexMap[player] = index;
  });
    
  callings.forEach(calling => {
    const index = indexMap[calling];
    if (index > 0){
      // 인덱스를 사용하여 선수 위치 교체
      [players[index], players[index - 1]] = [players[index - 1], players[index]];
      // 인덱스 맵 업데이트
      indexMap[players[index]] = index;
      indexMap[players[index - 1]] = index - 1;
    }
  });
    
  return players;
}