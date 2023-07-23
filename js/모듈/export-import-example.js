//~ 공부하는 폴더(main.js라고 생각해라)

// import * as abc from '../module.js'

// console.log(abc);



//~ 예제공부 시작해보자~

// setTimeout(async()=> {
//   // import('../module.js').then(abc => {
//   //   console.log(abc);
//   // })
//   const abc = await import('../module.js')
//   console.log(abc);
// },1000)



//~ a.js파일 예제

import {a, b} from './utils.js'

console.log(a());
console.log(b());