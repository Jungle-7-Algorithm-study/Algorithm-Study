function solution(arr1, arr2) {
  let ans = [];
  for (let i = 0; i < arr1.length; i++) {   // row
    let row = [];
    for (let j = 0; j < arr2[0].length; j++) {  // col
      let sum = 0;
      for (let k = 0; k < arr2.length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      row.push(sum);
    }
    ans.push(row);
  }
  return ans;
}

arr1 = [[1, 4], [3, 2], [4, 1]];
arr2 = [[3, 3], [3, 3]];
console.log(solution(arr1, arr2));