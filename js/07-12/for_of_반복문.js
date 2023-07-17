// For of 반복문
// 배열데이터는 of를 사용한다

/*const fruits = ['Apple, Banana, Cherry, mango']

// for (let i = 0; i<fruits.length; i +=1) {
//   console.log(fruits[i])
// }

for (const sb of fruits) {
  console.log(sb)
} */

//예제------------------------------------

const users = [
  {
    name: 'kyujeong',
    age: 27
  },
  {
    name: 'soual',
    age: 87
  },
  {
    name: 'heropy',
    age: 52
  }
]

for (let i = 0; i < users.length; i += 1) {
  console.log(users[i].name)
}

for (const ID of users) {
  console.log(ID.age);
}