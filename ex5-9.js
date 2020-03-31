// 특정 함수에 사용자가 정의한 객체의 메서드 연결하기

// 생성자 함수를 만든다
function HelloFunc() {
  this.greeting = "hello";
}

// HelloFunc.prototype에 call 프로퍼티(메서드)를 추가한다
HelloFunc.prototype.call = function(func) {
  func ? func(this.greeting) : this.func(this.greeting);
  // ?는 삼항 연산자로, 앞이 조건문, 뒤가 각각 조건문이 참일 때/ 거짓일 때 해당 내용을 실행한다.
  // 여기에서는 func인자가 들어온다면 앞의 표현식을 실행한다. 표현식 조건 상 인자는 함수여야 한다.
  // func인자가 없다면 call 메서드를 호출한 객체의 func 메서드에 객체.greeting을 인자로 넣어 실행한다
}


var userFunc = function(greeting) {
  console.log(greeting);
};

// 객체 생성
var objHello = new HelloFunc();
// func 프로퍼티 생성
objHello.func = userFunc;
// call 메서드 호출(프로토타입 체이닝이 일어남)
objHello.call();


// 응용
// 만일 call()에 인자가 들어갈 경우

var myFunc = function(greeting) {
  console.log(greeting + ":)")
};

objHello.call(myFunc);   // hello:)
