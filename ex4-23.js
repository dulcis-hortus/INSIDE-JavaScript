// 인자의 수에 따라 다르게 작동하는 함수

function sum() {

    var sum = 0;
    // console.log(arguments);
    for (var i = 0; i < arguments.length; i++ ) {
        sum += arguments[i];
    };

    return sum
}

// 함수가 잘 만들어졌는지 확인해보자
sum(1, 2, 3, 4, 5, 6, 7);
sum(3, 4, 5, 6);
