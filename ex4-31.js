// 생성자 함수의 this를 명시적으로 바인딩 해보자

var Person = function (name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
};


// foo 빈 객체를 생성(객체 리터럴 방식)
var foo = {};


// this를 명시적으로 foo에 바인딩 시킴
Person.apply(foo, ['JJ', 27, 'orange']);

// foo 객체가 어떻게 달라졌는지 확인
console.log(foo);  // 제대로 생성이 되었음을 확인할 수 있다.

// 일반적인 방식으로 새로운 객체를 만들어본다
var foo2 = new Person('YS', 27, 'green');
// 이상 없음
