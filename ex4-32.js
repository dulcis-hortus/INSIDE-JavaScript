// 마지막으로 만만찮은 코드를 이해해보자
// apply()가 어떻게 유사 배열 객체에 배열 메소드를 사용하는데 유용한지 알아보는 예제

function myFunction() {
    console.dir(arguments);

    // arguments.shift();  // 유사 배열 객체이므로 에러 발생

    // arguments 객체를 배열로 변환
    var args = Array.prototype.slice.apply(arguments);
    console.dir(args);

    // 여기까지가 예제인데, 책에 누락된 부분이 있는 듯하다.
    // 내부함수 inner()를 만들어 인자 중 첫 번째 요소를 삭제하고 전달해보자.

      args.shift()  // JS Array shift() : 배열의 첫 번째 요소를 삭제하고 그 요소를 반환한다.

      var inner = function (args) {
        console.log(args);
      };

    inner(args);
}

myFunction(2, 3, 4, 5, 6); //배열로 전달되긴 하지만, 어쨌든 전달됨을 확인할 수 있다.
