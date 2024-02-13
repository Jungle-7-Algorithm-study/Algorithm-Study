// 재귀함수가 뭔가요?
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const N = +input[0];
const script = [`어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.`];
const recursive = (n) => {
  const underbar = "____".repeat(n);
  if (n === N - 1) {
    script.push(`${underbar}"재귀함수가 뭔가요?"`);
    script.push(`${underbar}"재귀함수는 자기 자신을 호출하는 함수라네"`);
    for (let i = n; i >= 0; i--) {
      const reunderbar = "____".repeat(i);
      script.push(`${reunderbar}라고 답변하였지.`);
    }
    console.log(script.join("\n"));
    return;
  }
  script.push(`${underbar}"재귀함수가 뭔가요?"`);
  script.push(
    `${underbar}"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.`,
  );
  script.push(
    `${underbar}마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.`,
  );
  script.push(
    `${underbar}그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`,
  );
  recursive(n + 1);
};

recursive(0);
