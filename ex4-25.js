// 함수 내부 변수는 전역 변수로 저장된다

var test = 'This is a test.';
console.log(window.test);

var sayFoo = function () {
    console.log(this.test);
};

// 전역변수란 무엇인가?
// 
sayFoo();
