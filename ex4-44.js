// 객체의 프로퍼티를 읽거나 메서드를 실행할 때만 프로토타입 체이닝이 일어난다
// 아래의 예시에서 country를 전부 프로퍼티로 해도 되고 전부 메서드로 해도 된다.

function Person(name) {
  this.name = name;
}

// Person() 함수의 prototype 객체에 country 메서드를 추가함
Person.prototype.country = function () {
  return 'USA'
}

// 객체 생성
var foo = new Person('foo');
var bar = new Person('bar');


// country 메서드 실행
console.log(foo.country());     // USA
console.log(bar.country());     // USA


// foo 객체에 메서드(또는 프로퍼티)를 동적으로 추가함
// 프로토타입 체이닝이 발생하지 않는다는 걸 증명하는 핵심적인 파트
foo.country = function () {
    return 'Korea'
};

// 다시 country 메서드, 프로퍼티를 실행함
console.log(foo.country());       // Korea
console.log(bar.country());       // USA
