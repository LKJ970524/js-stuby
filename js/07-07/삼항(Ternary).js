// 삼항(Ternary)


/*
const a = 5

if (a < 2) {
  console.log('참!')
} else {
  console.log('거짓이다 이것듀라....')
}
*/

// 삼항 연산자
// 조건 ? 참 : 거짓
/*console.log(a < 2 ? '참!' : '거짓...')*/

// 예제
function getAlert(message) {
  return message ? message : '메시지가 존재하지 않습니다!'
}

/* 
function getAlert(message) {
  return message 
  ? message 
  : '메시지가 존재하지 않습니다!'
}
*/

console.log(getAlert('안녕하십니꽈~'))
console.log(getAlert(''))