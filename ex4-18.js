// 내부함수에 대해 알아보기

function parent() {
    var a = 100;
    var b = 200;


    function child() {

        var b = 300;

      console.log(a);
      console.log(b);


    };

    child();
}

// b 변수에 대해 어떤 것을 호출해야 할지 혼선이 있는 모양이다.
// 해결함
