// arguments 객체 분석

function add(arg1, arg2) {
    console.dir(arguments);
    return (arg1 + arg2);
}

// 인자 수를 다르게 해서 실험
console.log(add(1, 2));
console.log(add(1));
console.log(add(1, 2, 3));
