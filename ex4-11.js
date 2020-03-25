// 함수를 리턴하는 foo() 함수 정의
var foo = function () {
  return function () {
    console.log('this function is the return value.');
  };
};

var bar = foo()   // 함수를 실행시키므로서 리턴 함수를 넘겨받았다.
bar()  // 넘겨받은 함수를 실행시킴.
