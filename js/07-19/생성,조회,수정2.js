
//* E.dataset
//todo 요소의 각 `data-` 속성 값을 얻거나 지정합니다.
/*
const el = document.querySelector('.child')
const str = 'supa duba diva'
const obj = {a:1, b:2}

el.dataset.helloWorld = str
el.dataset.object = JSON.stringify(obj)

console.log(el.dataset.helloWorld);
console.log(el.dataset.object);
console.log(JSON.parse(el.dataset.object));
*/
//--------------------------------------------------------------------------

//* E.tagName
//todo 요소의 태그 이름을 반환한다.
/*
const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')
const el = document.createElement('span')


console.log(parentEl.tagName);
console.log(childEl.tagName);
console.log(el.tagName);
console.log(document.body.tagName);
*/
//--------------------------------------------------------------------------

//* E.id
//todo 요소의 `id` 속성 값을 얻거나 지정한다.
/*
const el = document.querySelector('.child')
console.log(el.id);

el.id = 'child1'
console.log(el.id);
console.log(el);
*/
//--------------------------------------------------------------------------

//* E.className
//todo 요소의 `class` 속성 값을 얻거나 지정한다.
/*
const el = document.querySelector('.child')
console.log(el.className);

el.className += ' child1 active' //! 띄어쓰기를 넣어야 구분이 된다
console.log(el.className);
console.log(el);
*/
//--------------------------------------------------------------------------

//* E.classList
//todo 요소의 `class` 속성 값을 제어한다.

//! - `.add()` : 새로운 값을 추가
//! - `.remove()` : 기존 값을 제거
//! - `.toggle()` : 값을 토글
//! - `.contains()` : 값을 확인
/*
const el = document.querySelector('.child')

el.classList.add('active')
console.log(el.classList.contains('active'));

el.classList.remove('active')
console.log(el.classList.contains('active'));

el.addEventListener('click', ()=> {
  el.classList.toggle('active')
  console.log(el.classList.contains('active'));
})
*/
//--------------------------------------------------------------------------


// E.style
// 요소의 `style`속성(인라인 스타일)의 CSS 속성 값을 얻거나 지정한다.

const el = document.querySelector('.child')

// 개별지정!
// el.style.width = '100px'
// el.style.fontsize = '20px'
// el.style.backgroundColor = 'green'
// el.style.position = 'absolute'

// 한번에 지정!
// Object.assign(el.style, {
//   width: '100px',
//   fontsize: '20px',
//   backgroundColor: 'green',
//   position: 'absolute'
// })

console.log(el.style);
console.log(el.style.width);
console.log(el.style.fontsize);
console.log(el.style.backgroundColor);
console.log(el.style.position);

//--------------------------------------------------------------------------
//!16분 40초 듣기