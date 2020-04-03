// 이전의 평범한 함수는 변수가 전역에 노출되어 있다는 단점이 있었다.
// 이를 막기 위해 클로저를 사용하여 함수 안에 포함시켜서 코드를 짜자.

var getCompletedStr = (function () {
  var buffAr = [
    'I am ',
    '',
    '. I live in ',
    '',
    '. I\'m ',
    '',
    ' years old.'
  ];

  return (function (name, city, age) {
    buffAr[1] = name;
    buffAr[3] = city;
    buffAr[5] = age;
    return buffAr.join('');
  })
})();    // 함수를 즉시 실행할 때는 괄호로 감싸서 실행한다


var str = getCompletedStr("JJ0", "Seoul", "2n");

console.log(str);


// 성공
