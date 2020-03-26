// 내부 함수에서도 this 바인딩은 전역 객체를 지정한다는 예시

var value = 100;

var myObject = {
  value : 1,
  func1 : function () {
      this.value += 1;
      console.log('func1 called. this.value = ', this.value);

      // 내부함수 func2
        function func2 () {
          this.value += 1;
          console.log('func2 called. this.value = ', this.value);

        // 2 안에 다시 func3이 있음
          function func3 () {
            this.value += 1;
            console.log('func3 called. this.value = ', this.value);
          } // func3을 정의한다.

          func3(); // func3을 호출한다.

        }  // func2를 정의한다.

      func2(); //func2를 호출한다.

    } // func1 끝
};

// 이제 실행시키자
myObject.func1();
