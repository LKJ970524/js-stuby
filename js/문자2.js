// .replace()
//todo 대상문자에서 패턴(문자, 정규식[정규표현식 /*/로 만들수잇다])과 일치하는 부분을 교체한 새로운 문자를 반환한다.
/*
const re = 'Hello, Hello?!'

console.log(re.replace('Hello','Hi'));
console.log(re.replace(/Hello/g,'Hi')); //? g(global)플래그를 넣어야한다.
console.log(re);
*/
//---------------------------------------------------------
/*
// .slice()
//todo 대상문자의 일부를 추출해 새로운 문자를 반환한다.
//todo 두번째 인수 직전까지 추출하고, 두번째 인수를 생략하면 대상문자의 끝까지 추출한다.

const sli = 'Hello world!'
//           012345678901
//          -210987654321

console.log(sli.slice(0, 5));
console.log(sli.slice(6, -1));
console.log(sli.slice(6));
console.log(sli);
*/
//---------------------------------------------------------

// .split()
//todo 대상 문자를 주어진 구분자로 나눠 배열로 반환한다.
/*
const str = 'Apple / Banana / Cherry'

console.log(str.split(' / '));
*/
//---------------------------------------------------------

// .toLowerCase()
//todo 대상 문자를 영어 소문자로 변환해 새로운 문자로 반환한다.

const lower = 'Apple, Banana, Cherry'

console.log(lower.toLowerCase());
console.log(lower);

//---------------------------------------------------------

// .toUpperCase()
//todo 대상 문자를 영어 대문자로 변환해 새로운 문자로 반환한다.

const Up = 'Apple, Banana, Cherry'

console.log(Up.toUpperCase());
console.log(Up);


//---------------------------------------------------------

// .trim()
// 대상 문자의 앞뒤 공백문자(space, tab 등)를 제거한 새로운 문자를 반환한다.(문자사이사이에 있는 공백은 제거하지 않는다)

const tr = '    kyu jeong     '

console.log(tr.trim());
console.log(tr);