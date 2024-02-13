const arr1 = [1, 2, 3];
// 배열의 리터럴 표기법을 사용하여 arr1이라는 배열을 선언하고, 1, 2, 3을 요소로 추가한다.
const arr2 = Array.of(1, 2, 3);
// Array.of() 메서드를 사용하여 arr2라는 배열을 선언하고, 1, 2, 3을 요소로 추가한다.
const arr3 = Array.from([1, 2, 3]);
// Array.from() 메서드를 사용하여 arr3이라는 배열을 선언하고, 1, 2, 3을 요소로 추가한다.
const arr4 = new Array(1, 2, 3);
// new 연산자를 사용하여 Array 생성자를 호출하여 arr4라는 배열을 선언하고, 1, 2, 3을 요소로 추가한다.
console.log(typeof arr1, arr1);
console.log(typeof arr2, arr2);
console.log(typeof arr3, arr3);
console.log(typeof arr4, arr4);

arr1.length = 5;
console.log(arr1);
