// 생성자 함수를 일반 함수처럼 호출할 때 벌어지는 문제

var Person = function (name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
};

var qux = Person('Ji-yeong', 27, 'skyblue');

// 과연 어떤 객체에 바인딩 되었는지 확인해보자.
// 결과가 짐작이 안 된다...;;
console.log(qux.name);  // name 프로퍼티가 없다고 뜬다.
console.log(window.name);

// 한 번만 더 실험!
console.dir(qux);  // undefined.
//이는 생성자 함수가 일반함수로 취급되면서 return값이 없는 함수로 취급되었기 때문이다.
// 생성자 함수의 경우 따로 return을 지정하지 않으면 새로 만들어진 객체가 배치된다.

// '변수 = function(){}' 에서 변수가 넘겨받는 값은, function의 return값이다!!
// + 그럴 때도 있고 아닐 때도 있다. 예를 들어 var A = function() {} 에서 변수 A가 할당받는 것은 "함수 그 자체"이다.
