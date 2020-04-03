// 클로저의 활용(1)
// 일반 함수

var buffAr = [
  'I am ',
  '',
  '. I live in ',
  '',
  '. I\'m ',
  '',
  ' years old.'
];


function getCompletedStr(name, city, age) {
  buffAr[1] = name;
  buffAr[3] = city;
  buffAr[5] = age;

  return buffAr.join('');
}


var str = getCompletedStr("JJ0", "Seoul", "2n");

console.log(str);
