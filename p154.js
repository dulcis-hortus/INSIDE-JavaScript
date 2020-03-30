// 함수 호이스팅의 이해

foo();
bar();

var foo = function () {
  console.log("foo and x = " + x);
};

function bar() {
  console.log("bar and x = " + x);
}

var x = 1;



// 우선 변수 선언(var A)과 함수 선언(function A)은 변수 객체에 저장됨을 알아야 한다.
// 그 다음 실행이 이루어지고, 여기엔 변수에 구체적인 값을 할당하는 작업이 포함된다.

// 1. 따라서 var foo, function bar(){}, var x가 먼저 만들어져 변수 객체에 저장되고,
// 2. 위에서부터 차례로 실행문(;)이 실행된다.
//  2-1. foo();는 var foo는 아직 함수가 아니므로 TypeError가 뜬다.
//  2-2. bar();는 실행되지만, var x에 아직 구체적인 값이 할당되기 전이므로 undefined가 뜬다.
//  2-3. 마지막으로 x에 1이 할당된다.
