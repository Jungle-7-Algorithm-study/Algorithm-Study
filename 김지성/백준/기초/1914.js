// 재귀함수가 뭔가요?
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

console.log(+input);
