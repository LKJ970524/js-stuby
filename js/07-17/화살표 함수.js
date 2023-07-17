// 화살표 함수(Arrow function)

// function sum() {}
// const sum = function () {}
// const sum = () => {}

// function sum(a, b) {
//   return a + b
// }
// const sum = (a,b) => a + b

// console.log(sum(1, 2)) // 3
// console.log(sum(10, 20)) // 30


//---------------------------------------------------
//? 다양한패턴 공부(우이씌...... 겁나많아;;)

const a = () => {}
const b = x => {} //! 매개변수가 1개이기때문에 소괄호 생략 가능!!
const c = (x,y) => {} //! 매개변수가 2개 이상있다면 소괄호는 생략 불가능!!
const d = x => {return x * x} //? 아래 const e 와 같은 개념이다. (함수의 로직이 return으로 시작하면 중괄호와 return이 생략 가능하다.)
const e = x => x * x
const f = x => {
  console.log(x * x)
  return x * x
}  //? 중괄호 안에 return이 아닌 다른 로직이 있다면 중괄호와 return은 생략이 불가능하다.
const g = () => { return {a: 1} } //? return과 중괄호 생략가능할거같지?
const h = () => ({ a: 1}) //? 잘못된 방식이다 이놈아(코드범위 중괄호와 객체범위 중괄호가 같은 중괄호기호를 사용하기때문에 사용못해 이자슥아 해결책은 중괄호바깥에 소괄호 하나를 감싸렴)  이건또 객체만 사용가능한것도 함정
const i = () => { return [1,2,3] } //TODO 배열데이터는 대괄호를 쓰기때문에 중괄호와 return은 생략이 가능하다
const j = () => [1,2,3] //todo 배열데이터이기 때문에 객체데이터랑 다르게 소괄호로 묶을 필요가없다.



//* this는 화살표함수와 function(일반함수)에서 해석하는 방식의 차이가 존재
this //! 좀 알려줘라 맨날 뒤로간대;;;;;

/*this
function(일반함수)의 this는 호출 위치(위치고정)에서 정의가되지만,
화살표 함수의 this는 자신이 선언된 함수(렉시컬) 범위(광범위가능)에서 정의한다.
렉시컬(Lexical)이란 함수가 동작할 수 있는 유효한 범위를 의미합니다.
*/