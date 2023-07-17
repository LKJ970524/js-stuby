// Nullish 병합(Nullish Coalescing)

/*
const n = 0


// OR 연산자를 사용하는 경우 (거짓이아닌 참을 찾는상황)
const num1 = n || 7
console.log(num1) // 0

//Nullish 병합 연산자를 사용하는 경우 (null,undefined를 건너띄고 나머지는 반환하게 된다.)
const num2 = n ?? 7
console.log(num2) //0 
*/


console.log(null ?? 1) // 1
console.log(undefined ?? 2) // 2
console.log(null ?? undefined); //undefined
console.log(undefined ?? null); //null
console.log(null ?? 1 ?? 2) // 1
console.log(false ?? 1 ?? 2) // false
console.log(0 ?? 1 ?? 2) // 0

