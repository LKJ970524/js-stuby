// 함수 (Function)

// 함수 선언문 (Declaration) [function 키워드 옆에 이름이 붙어있는것]
/*function yabal() {}*/

// 함수 표현식 (Expression) [const, let 같은 변수에 할당연산자를 활용해서 함수가 붙어있는것]
/*const yabal = function () {}

yabal()*/



//-------------------------------------------------------------------------


// 호이스팅(Hoisting) : 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상을 말합니다.

yabal()

/*function yabal() {
  console.log('Yabal~')
} // 함수 선언은 호이스팅이 발생한다 */


const yabal = function () {
  console.log('Yabal~')
} // 하지만, 함수 표현식은 호이스팅이 일어나지 않는다 (해당코드는 작동하지 않는다)
