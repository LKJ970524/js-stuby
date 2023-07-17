// Switch 조건문
//기본식
/* switch (조건) {
  case 값1:
    // 조건이 '값1'일 때 실행
    break
  case 값2:
    // 조건이 '값2'일 때 실행
    break
  default:
    // 조건이 '값1'도 '값2'도 아닐 때 실행
} */

// 예제------------------------------------------------

function price (fruit) {
/*  
    switch (fruit) {
    case 'Apple':
      return 1000
    case 'Banana':
      return 1500
    case 'Cherry':
      return 2000
    default:
      return 0
  } */

  //switch를 if로 변경한 케이스
  if (fruit === 'Apple') {
    return 1000
  } else if (fruit === 'Banana') {
    return 1500
  } else if (fruit === 'Cherry') {
    return 2000
  } else {
    return 0
  }
}

console.log(price('Apple'));
console.log(price('Banana'));
console.log(price('Cherry'));
console.log(price('hello'));



// switch조건문은 if로 언제든지 변경이 가능하지만 if는 switch로 바꿀수 없다.
// 매개변수가 확실히 있을때는 switch가 더 편할수 있다.