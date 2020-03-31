
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




// 솔직히 잘 이해 못했다;; 뭘 하려는 건지;;
// 암튼 실습을 통해 이해해보자

// saySomething 함수 정의
// 인자가 3개 필요한 함수이며, return값으로 다시 함수를 내보낸다
// return 함수는 객체(obj)의 메서드(methodName)(인자를 2개 받음)를 실행시켜 그 값을 return하는 함수이다.
function saySomething(obj, methodName, name) {
  return (function(greeting) {
    return obj[methodName](greeting, name);
  });
}

// 생성자 함수 newObj 함수 정의
// 인자를 2개 받으며, 첫번째 인자로 받은 객체에 func 프로퍼티를 추가시킨다.
// 이 메서드는 실질적으로 2개의 인자값을 전달하며 saySomething 함수를 호출하고 그 결과값을 func 프로퍼티에 할당한다.
// 그리고 그 객체를 반출한다.
function newObj(obj, name) {
  // 이 과정을 거치면, obj.func의 값은
  // 익명함수 function(greeting) { return obj[methodName](,)}으로 바뀌며
  // 이는 'who' 메서드를 가리킨다.
  // 즉, obj.func();라는 건 who 메서드를 실행시키겠다는 뜻이며 이 메서드는 2개의 인자가 필요하지만,
  // name 인자는 함수를 실행시킬 때 직접 입력하는 게 아니라 초반 객체를 생성할 때 입력하게 된다.
  // 그 입력값이 스코프 체이닝을 통해 who 메소드로 전달되어 정상적으로 실행된다.
  obj.func = saySomething(this, "who", name);
  return obj;
}

// 생성자 함수의 프로토타입에 who 메서드를 추가한다.
// who 메서드는 2개의 인자를 받으며, 받은 인자들을 연결시켜 출력하는 역할을 한다.
// || 연산자가 있기에, name 인자를 넣지 않으면 "everyone"이 자동으로 들어간다.
newObj.prototype.who = function(greeting, name) {
  console.log(greeting + " " + (name || "everyone") );
}

// 기존 objHello 객체에서 func 프로퍼티만 교체하여 새로운 변수에 저장한다.
// 따라서 obj1는 비록 표면적으로는 newObj에 의해서 만들어졌지만,
// 이 생성자 함수는 첫번째 인자로 받은 객체를 반출하므로 HelloFunc으로 만들어진 객체가 된다.
// 이 예제에서는 unserFunc이 saySomething으로 교체되었다.
var obj1 = new newObj(objHello, "JJ0");

// call()는 여전히 인자가 없을 때는 this.func(this.greeting)을 실행시킨다.
//
obj1.call();
