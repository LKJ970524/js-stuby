// 구조 분해 할당(Destructuring assignment)  /* 객체데이터와 배열데이터에서만 사용된다. */
/*
let a = 0
let b = 0
let c = 0
const arr = [1,2,3]

;[a,b,c] = arr

console.log(a,b,c) //1 2 3 */


/*
let b = 0
let c = 0
const arr = [1, 2, 3]

;[,, c] = arr

console.log(c); // 표기되는콘솔로그는 3
*/
//-------------------------------------------

/*
const arr = [1, 2, 3]
const [a, ...xyz] = arr // (2),[2,3]

console.log(a, xyz) */

//------------------------------------------

const obj = {
  a: 1,
  b: 2,
  c: 3,
  x: 7,
  y: 100
}
// const a = obj.a
// const b = obj.b
// const c = obj.c

const {c, ...rest} = obj

console.log(c, rest)