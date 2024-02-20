// 큐 2
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  pop() {
    if (this.size === 0) {
      return -1;
    }
    const data = this.head.data;
    this.head = this.head.next;
    this.size--;
    return data;
  }

  empty() {
    return this.size === 0 ? 1 : 0;
  }

  front() {
    return this.size === 0 ? -1 : this.head.data;
  }

  back() {
    return this.size === 0 ? -1 : this.tail.data;
  }
}

const queue = new Queue();
let result = "";

for (let i = 1; i <= input[0]; i++) {
  const command = input[i].split(" ");

  switch (command[0]) {
    case "push":
      queue.push(command[1]);
      break;
    case "pop":
      result += queue.pop() + "\n";
      break;
    case "size":
      result += queue.size + "\n";
      break;
    case "empty":
      result += queue.empty() + "\n";
      break;
    case "front":
      result += queue.front() + "\n";
      break;
    case "back":
      result += queue.back() + "\n";
      break;
  }
}

console.log(result);