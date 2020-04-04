// for문 안에서의 클로저의 사용 주의
// i는 참조값이라는 걸 기억하자

function countSeconds(howMany) {
  for (let i = 1; i <= howMany; i++) {
    setTimeout(function () {
      console.log(i);
    }, i*1000);
  }
}

countSeconds(3);

// 제대로 나오는데?;;
// 와 그 사이에 JS개정판 나와서 let 쓰면 해결된대...
// 진짜 기본기 좀 배우고 나서는 책으로 공부 못 하겠다...

// 만일 i를 var로 선언했다면, 해결책은 setTimeout을 감싸는 익명함수를 만들어서 i를 인자로 넣고 바로 실행시키는 코드를 짜는 것이다.
// 이렇게 하면 클로저가 갖는 i변수에 대한 참조가 끊어지면서 제대로 동작한다.
