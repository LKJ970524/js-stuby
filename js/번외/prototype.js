// prototype //! 배열데이터에서 사용할수 있는 각각의 속성이나 메소드는 기본적으로 prototype에 연결되어있다,

// const fruits = ['Apple', 'Banana', 'Cherry']
/*const fruits = new Array('Apple', 'Banana', 'Cherry')

console.log(fruits);
console.log(fruits.length); //? .length는 배열 개수를 표기한다
console.log(fruits.includes('Apple')); //? 특정한 아이템이 들어있는지 확인하는 용도 true/false로 나타낸다
console.log(fruits.includes('Orange'));  //? 오렌지가 없어서 false로 나타낸다.

Array.prototype.KyuJeong = function () {
  console.log(this);
}

fruits.KyuJeong()

const arr = []
arr.KyuJeong()
*/


//----------------------------------------------
//1번째 예시
// const kj = {
//   firstName: 'KyuJeong',
//   lastName: 'Lee',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   } 
// }
// const neo = {
//   firstName: 'Neo',
//   lastName: 'James'
// }

// console.log(kj.getFullName())
// console.log(kj.getFullName.call(neo))


// 2번째 예시 장점: 첫번째 예시에서 getfullname이라는 메소드를 더 효울적으로 사용하기 위함
function User(first, last) {
  this.firstName = first
  this.lastName = last
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

const kj = new User('james', 'Lee')
const neo = new User('Neo', 'James')

console.log(kj);
console.log(neo);
console.log(kj.getFullName());
console.log(neo.getFullName());
