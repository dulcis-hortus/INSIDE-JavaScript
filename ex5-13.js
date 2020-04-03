// setTimeout 함수를 클로저를 통해 적용해보자
// 이 함수는 첫번째 인자로 사용자 함수를, 두번째 인자로 시간을 받는다
// 두번째 인자의 시간마다 첫번째 인자인 함수를 호출한다
// 우리의 목표는 사용자 함수가 인자를 받아서 적용할 수 있게 하는 것이다


function callLater(obj, a, b) {
  return (function () {

    obj["sum"] = a+b;

    console.log(obj["sum"]);
  });
}


var anyobj = {
  sum : 0
};


var func = callLater(anyobj, 1, 2);

setTimeout(func, 1);  // 인자를 넣으면 필연적으로 함수가 실행되므로, 원래대로라면
                        // 예약을 할 수가 없다.
