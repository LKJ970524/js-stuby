// Boolean(불린) : 논리데이터
// const a = true
// const b = false

// if (b) {
//  console.log('hello')
// }

// null : 할당이 가능하다(명시적)
// let age = null

// console.log(age);

// setTimeout(function () {
//   age = 85
//   console.log(age)
// }, 1000)

// undefined : 할당이 되어있지 않은 상태(암시적)
// let age

// console.log(age);

// setTimeout(function () {
//   age = 85
//   console.log(age)
// }, 1000)

/*const user = {
  name: '규정',
  age: 27,
  email: null
}

console.log(user.name)
console.log(user.age)
console.log(user.email)
console.log(user.abc)*/



// Array (배열)
// 리터럴 방식을 이용하여 new Array를 빼고 []가 들어갔다

/*const fruits = ['Apple', 'Banana', 'Cherry']

console.log(fruits.length)
console.log(fruits[fruits.length - 1])*/


// Object (객체)

/*const user = new Object()
user.name = '규정'
user.age = 27

console.log(user)*/

/*function User() {
  this.name = '규정'
  this.age = 27
}
const user = new User()*/


/*const userA = {
  name: '규정',
  age: 27
}
const userB = {
  name: '자유',
  age: 20,
  parent: userA
}

console.log(userB.parent.name)
console.log(userB['parent']['name'])
// console.log(user.age) // 점표기법(변수를 채워놓을수가없다)
// console.log(user[key]) //대괄호 표기법

const users = [userA, userB]

console.log(users[0]['age']) */



//
/*function hello() {
  console.log('hello!')
}

console.log(hello())*/

// function getNumber() {
//   return 123
// }

// const getNumber = function () {
//   return 123
// }

// console.log(123)


// const a = function () {
//   console.log('A')
// }

// const b = function (c) {
//   console.log(c)
//   c()
// }

// b(a)




// 형변환(Type Conversion)

const a = true
const b = 1

console.log(a == b)

//===(일치연산자)
//==(동등연산자)


