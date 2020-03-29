// 프로토타입 객체 내의 메소드에서 this를 사용할 경우 바인딩 되는 객체 확인

// 생성자 함수 정의
function Person (name) {
  this.name = name;
}


// 객체 생성
var foo = new Person('foo');   // new를 안 붙이면 생성자 함수로 쓰는 게 아니다.

// 프로토타입 객체 내에 메소드 추가
Person.prototype.getName = function () {
  console.log(this.name);    // 책에서는 return this.name으로 처리했다
};


// 메소드 호출
foo.getName();     // foo        // 책과 연동하면 console.log()를 추가해야 함.



// 프로토타입 객체 내에 프로퍼티 동적 생성
Person.prototype.name = 'person';  // name : 'person'이 추가된 것.


// 메소드 호출
Person.prototype.getName();      // person
