// 빈 배열
var emptyArr = [];
console.log(emptyArr[0]);

// 배열 요소 동적 생성
emptyArr[0] = 100;
emptyArr[3] = 'eight';
emptyArr[7] = true;

console.log(emptyArr);
  // (출력값) [100, empty * 2, 'eight', empty * 3, true]
console.log(emptyArr[1]);  // undefined
console.log(emptyArr.length)  // 8
