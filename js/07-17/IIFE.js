// 즉시실행함수(IIFE, Immediately-Invoked Function Expression)

const a = 7

const double = () => {
  console.log(a * 2);
}
double();

(() => {
  console.log(a * 2);
})();

// F = function
(() => {console.log(a * 2)})();       // (F)()
(function() {console.log(a * 3)})();  // (F)()
(function() {console.log(a * 4)}());  // (F())
!function () {console.log(a * 6)}();  // !F()
+function () {console.log(a * 9)}();  // +F()

//! 뭐 이렇게 종류가 많은데 머리아프게;;

//--------------------------------------------------
//? 두번째 소괄호를 사용할것임

((a,b) => {
  console.log(a.innerWidth);
  console.log(b.body);
})(window, document) //todo 두번쨰 소괄호로 들어가는 각각의 데이터를 즉시실행 함수에 매게변수로 적용가능하다.
//? 코드의 난독화를 위해 사용된다.
