// 반환 및 종료


//return은 js 데이터를 반환해주고, 함수를 종료하는 역할도 한다
/* function hello() {
  return
} // return 뒤에 값이 없다면 (암시적으로) undefined값이 나오게된다

console.log(hello()); */


// 예제--------

function plus(num) {
  if (typeof num !== 'number') {
    console.log('숫자가 아니무니다')
    return 0
  }
  return num + 1
}

console.log(plus(2))
console.log(plus(7));
console.log(plus());
console.log(plus('아이우에오'));
