// 참과 거짓(Truthy & Falsy)

// 거짓의 종류
// 1) false
// 2) 0
// 3) null
// 4) undefined
// 5) NaN
// 6) ''
// 7) 0n(BigInt)

/*
if (0n) {
  console.log('참!')
}*/


//예제
const fruits = ['apple']

if (fruits.length) {
  console.log('아이템이 들어있습니다.')
}