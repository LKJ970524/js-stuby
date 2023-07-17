// 데이터 타입 확인
// null과 객체 데이터는 구분 불가
console.log(typeof 'hello' === 'string')
console.log(typeof 123 === 'number')
console.log(typeof false === 'boolean')
console.log(typeof undefined === 'undefined')
console.log(typeof null === 'object') 
console.log(typeof [] === 'object')
console.log(typeof {} === 'object')
console.log(typeof function () {} === 'function');


// null과 객체데이터를 구분할수 있지만 많이 쓰이는 방식은 아니다
// console.log(null.constructor)
console.log([].constructor === Array)
console.log({}.constructor === Object)


//외워야 하는게 너무 많다;;;;
function checkType(data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}



// 최소한의 property를 써서 모든 데이터 타입을 구분하기 좋다
console.log(checkType('hello') === 'String')
console.log(checkType(123))
console.log(checkType(false))
console.log(checkType(undefined))
console.log(checkType(null))
console.log(checkType([]))
console.log(checkType({}))
console.log(checkType(function () {}))
