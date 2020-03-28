// String.prototype에 메소드를 추가해보자

String.prototype.testMethod = function () {
    console.log("This is the testMethod()");
};

var str = "This is test."

str.testMethod();
