// 자바스크립트에서 함수의 인자의 수는 실행에 크게 상관 없다

function func(arg1, arg2) {
    console.log(arg1, arg2);
}

// 인자 수를 다르게 실행해본다
func();
func(1);
func(1, 2);
func(1, 2, 3);
