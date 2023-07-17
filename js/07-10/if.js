// If 조건문


//기본 if사용방법
/*if (조건) {
  //
}  // 참인 경우에만 실행된다*/

// 거짓경우가 하나있을때 else를 사용한다
/*if (조건) {
  //
} else {
//
} // 첫번째 조건이 거짓일때 두번째 조건이 실행되는 if문 */

//조건이 몇개가 충족이 안되서 else if를 사용 
/*if(조건) {
  //
} else if (조건2) {
//
} else if (조건3) {
//
} else {
//
} // 조건이 여러개인 경우도 있다. */


//예제--------------------------------------------------------------------

function isPositive(number) {
  if (number > 3000 > 0) {
    return '양수다 잡것아'
  } else if(number > 2999) {
    return '아이언맨 딸이냐 무슨 3000임'
  } else if(number < 0) {
    return '양수가 아니면 음수겠지 뭐겠니 잡것아'
  } else {
    return '양수도 음수도 아니면 0이지 뭐겠냐'
  }
}

console.log(isPositive(1));
console.log(isPositive(3000));
console.log(isPositive(10));
console.log(isPositive(-2));
console.log(isPositive(0));