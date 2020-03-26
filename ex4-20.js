// 함수를 리턴하는 응용실습

var self = function () {
    console.log('a');

  return function () {
      console.log('b');
    };
};

// 첫번째 실행
self = self();
// 나는 var를 붙였는데 예제에는 없다.
// 두번째 실행
self();
