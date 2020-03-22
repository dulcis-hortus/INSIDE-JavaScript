// 객체 리터럴을 통한 객체 생성
var foo = {
  name: 'foo',
  age: 30,
  major: 'computer science'
};

// for in 문을 이용한 객체 프로퍼티 출력
var prop;
for (prop in foo) {
  console.log(prop, foo[prop])
  }

// 과연 prop의 타입은? Object? String? Key?
var prop;
for (prop in foo) {
  console.log(typeof prop)
}
// 놀랍게도 결과는 String이었다고 한다
