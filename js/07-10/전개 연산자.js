// 전개연산자(Spread Operator)

// ...을 사용해서 배열 데이터를 펼쳐서 전개한다
/*
const a = [1, 2, 3]
const b = [4, 5, 6]


const c = a.concat(b)
console.log(c);

const d = [...a, ...b]
console.log(d) // [[1,2,3], [4,5,6]] */

//-----------------------------------------------------------------

/*
const a = {x: 1, y: 2}
const b = {y: 3, z: 4}

const c = Object.assign({}, a, b)
console.log(c) // y가 3인이유는 객체는 고유하기때문에 덮어쓰기가 이루어졌다

const d = {...a, ...b}
console.log(d); //{ x: 1, y: 3, z: 4} */

//-----------------------------------------------------------------

function fn (x, y, z) {
  console.log(x, y, z)
}

fn(1, 2, 3)

const a = [1, 2, 3]
// fn(a[0], a[1], a[2])
// fn(1, 2, 3) // 암시적으로 undefined가 된다
fn(...a)