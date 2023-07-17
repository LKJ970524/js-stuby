//논리(Logical)

/*const a = true
const b = false*/

// AND(그리고) 연산자
/*if (a && b) {
  console.log('다 참이래~');
}*/
console.log(true && false)
console.log(1 && 0)
console.log(1 && 2 && 0)
console.log(1 && 0 && 2);
console.log(0 && 1 && 2);
console.log('A' && 'B' && '')
console.log('A' && 'B' && 'C') //거짓이 없기떄문에 제일 마지막인 c가 반환처리 된다

// OR(또는) 연산자
/*if (a || b) {
  console.log('하나만 참이래~');
}*/

console.log(false || true);
console.log(0 || 41);
console.log(false || 0 || {});
console.log(false || [] || null);
console.log(function () {} || undefined ||'')
console.log(false || 0 || NaN);