// Math.abs()
//todo 주어진 숫자의 절댓값을 반환한다.
/*
console.log(Math.abs(2));
console.log(Math.abs(-2));
*/

//--------------------------------------------------------------

// Math.ceil()
//todo 주어진 숫자를 올림해 정수를 반환한다.
/*
console.log(Math.ceil(3.1515926535));
*/

//--------------------------------------------------------------

// Math.floor()
//todo 주어진 숫자를 내림해 정수를 반환한다.
/*
console.log(Math.floor(3.1415926535));
*/

//--------------------------------------------------------------

// Math.round()
//todo 주어진 숫자를 반올림해서 정수를 반환한다.

const num1 = 3.141
const num2 = 4.784

console.log(Math.round(num1));
console.log(Math.round(num2));

//--------------------------------------------------------------

// Math.max()
//todo 주어진 숫자중 가장 큰 숫자를 반환한다.
/*
console.log(Math.max(22,3,48,900));
*/

//--------------------------------------------------------------

// Math.min()
//todo 주어진 숫자중 가장 작은 숫자를 반환한다.
/*
console.log(Math.min(22,3,48,-50,900));
*/

//--------------------------------------------------------------

// Math.pow()
//todo 주어진 숫자의 거듭제곱한 값을 반환한다.
/*
console.log(Math.pow(8,3));
console.log(Math.pow(9,2));
console.log(Math.pow(12,2));
*/

//--------------------------------------------------------------

// Math.random()
//todo 숫자 0이상, 1미만의 난수를 반환한다.

console.log(Math.random());

// 특정범위의 랜덤 정수를 얻는 함수
function random(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min)) + min
}

console.log(random());
console.log(random(11, 20));
console.log(random(111, 999));
