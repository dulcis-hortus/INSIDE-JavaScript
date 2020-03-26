// 생성자 함수 이해하기
var Person = function (name) {  // 함수변수를 지정할 때는 끝에 '()'를 쓰지 않는다.
    this.name = name;
};

var JJ = new Person('Ji-yeong');
console.log(JJ.name);

// JJ라는 변수에 새로 만들어진 객체가 참조되었음을 알 수 있다.
// 또한 객체 내부에 name : 'Ji-yeong' 프로퍼티가 존재함을 알 수 있다.
