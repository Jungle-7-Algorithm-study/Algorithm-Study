function solution(targets) {
        
  targets.sort(function (a,b) {return a[1] - b[1];})
  let Count = 0;
  let targetMax = -1;
  
  targets.forEach((target) => {
  const [minX, maxX] = target;
  if (targetMax <= minX) {
    targetMax = maxX;
    Count += 1;
  }
  });
  
  return Count
}