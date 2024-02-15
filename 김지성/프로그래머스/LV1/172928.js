function solution(park, routes) {

  let maxRow = park.length - 1;
  let maxCol = park[0].lenght -1;

  let row = park.findIndex((s)=> s.includes("S"));
  let col = park[row].indexOf("S");

  routes.forEach((position) => {
    const [d,n] = position.split(" ");

    let tempRow = row;
    let tempCol = col;
    let flag = true;

    for (let i = 0; i < Number(n); i++){

      if (d==="E") tempCol++;
      else if (d==="W") tempCol--;
      else if (d==="S") tempRow++;
      else if (d==="N") tempRow--;

      if (
        tempRow > maxRow ||
        tempRow < 0 ||
        tempCol > maxCol ||
        tempCol < 0 ||
        park[tempRow][tempCol] === "X"
      ) {
        flag = false;
        break;
      }
    }

    if (flag){
      col = tempCol;
      row = tempRow;
    }
  });

  // 1. 시작 위치를 찾는다.
  // 2. routes를 따라서 이동
  // 3. 예외처리에 맞는지 검사
  // 4. 마지막까지 갔다면 result 표출

  return [row,col];
}