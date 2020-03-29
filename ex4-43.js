// 프로토타입 객체를 일반 객체로 변환하는 게 가능하다

function Person(name) {
  this.name = name;
}

// 확인
console.log(Person.prototype.constructor);  // Person(name)


// 객체 생성 및 country 메소드 확인
var foo = new Person('foo');

console.log(foo.country());    // error


// 프로토타입 객체 변환
Person.prototype = {
  country : function () {
    console.log('Korea');
  }
};


// 다시 메소드 확인
foo.country();     // Korea라고 생각했는데 함정에 빠졌다;;
                  // 여전히 에러가 난다(예전 객체가 프로토타입이므로)

console.log(foo.constructor);  // Object()
                                // Person(name)임 (안 바뀐다니까!)


// 새로운 객체 생성
var bar = new Person('bar');

bar.country();              // Korea
