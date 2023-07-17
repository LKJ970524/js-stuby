// 매개변수 패턴(Parameter pattern)
//// 기본값(Default value)

/*function sum(a, b = 1) {
 return a + b
}

console.log(sum(1, 2)) // argument
console.log(sum(7))
*/

//// 객체 구조 분해 할당(Destructuring assignment)

/*const user = {
  name: 'kj',
  age: 27
}

function getName({ name }) {
  return name
}
function getEmail({email = '이메일이 없습니다.'}) {
  return email
}


console.log(getName(user))
console.log(getEmail(user));*/

//// 배열 구조 분해 할당(Destructuring assignment)
/*const fruits = ['Apple', 'Banana', 'mango']
const numbers = [1, 2, 3, 4, 5, 6, 7]

function getSecondItem([,,b]) {
  return b
}

console.log(getSecondItem(fruits));
console.log(getSecondItem(numbers));
*/

//// 나머지 매개변수(Rest parameter)

function sum(...rest) {
  console.log(rest)
  console.log(arguments);
  return rest.reduce(function (acc, cur) {
    return acc + cur
  }, 0)
}

console.log(sum(1,2)) //3
console.log(sum(1,2,3,4)) //10
console.log(sum(1,2,3,4,5,6,7,8,9,10)) //55


//아규먼츠()(array like)는 유사배열이라고한다(배열데이터가 아님 reduce를 쓸수가없음)