// 내부함수 호출할 수 있는 방법

function parent() {
  var a = 100;

    var child = function () {
        console.log(a);
    };

    return child
}

// child 함수변수로부터 참조값을 넘겨받아 실행한다
var inner = parent();
inner();
// 이 과정은 이해했는데, a가 어떻게 100으로 정의되어 있는지 아리송하다.
// 아...? parent();를 한 순간, child 함수 안에 a가 정의된 걸까?
// 아니다. 함수 표현식으로 만들 경우, 함수 변수는 익명 함수에 접근할 수 있는 참조값을 받게 된다.
// 따라서 이 경우 inner는 child와 완전히 같은 방식으로 함수를 실행하게 된다.
