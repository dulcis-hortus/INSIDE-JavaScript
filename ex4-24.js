// 'this'의 바인딩을 알아보자

var myObject = {
  name : 'foo',
  sayName : function () {
      console.log(this.name);
  }
};

var otherObject = {
  name : 'bar',
};

otherObject.sayName = myObject.sayName;

// 아래 방식은 오류가 난다
// 왜냐하면 이미 콘솔을 썼는데 다시 쓰고 있기 때문이다.
// 그냥 return this.name이라고 하면 어떨까?
// 제대로 나온다.
console.log(otherObject.sayName());
console.log(myObject.sayName());

// 예제대로 가기~
otherObject.sayName();
myObject.sayName();
