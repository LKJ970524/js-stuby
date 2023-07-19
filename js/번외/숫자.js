// .toFixed()
//todo 숫자를 지정된 고정 소수점 표기(자리수)까지 표현하는 문자로 반환합니다.
/*
const pie = 3.1415926535

console.log( pie.toFixed(5));
console.log( parseFloat(pie.toFixed(2)));
*/
//-------------------------------------------------------------------

// .toLocaleString()
//todo 숫자를 현지 언어 형식의 문자로 반환한다.(뭔소리야)
/*
const local = 1000000

console.log(local.toLocaleString());
console.log(`${local.toLocaleString()}원`);
*/
//-------------------------------------------------------------------

// Number.isInteger()
//todo 숫자가 정수(integer)인지 확인한다.
//? 정적 메소드이고 데이터에서 사용되는것이 아닌 클래스에서 사용되는 메소드이다
/*
const num = 123
const pi = 3.14

console.log(Number.isInteger(num));
console.log(Number.isInteger(pi));
*/
//--------------------------------------------------------------------

// Number.inNaN()
//todo 주어진 값이 `NaN`인지 확인한다
/*
const num1 = NaN
const num2 = 123
const str = 'Hello world`'
const nul = null

console.log(Number.isNaN(num1));
console.log(Number.isNaN(num2));
console.log(Number.isNaN(str));
console.log(Number.isNaN(nul));
*/
//--------------------------------------------------------------------

// Number.parseInt() 또는 parseInt()
//todo 주어진 값(숫자, 문자)을 파싱(분석)해 특정 진수(radix)의 정수로 반환한다.
/*
const str = '3.1415926535'
const num = 3.1415926535

console.log(Number.parseInt(str, 10));
console.log(Number.parseInt(num, 10));
*/
//--------------------------------------------------------------------

// Number.parseFloat() 또는 parseFloat()
//todo 주어진 값(숫자, 문자)을 파싱(분석)해 부동소수점 실수로 반환한다.

const str = '3.1415926535'
const num = 3.1415926535

console.log(Number.parseFloat(str));
console.log(Number.parseFloat(num));
