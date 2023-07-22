
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
//^ 요소의 태그 이름을 반환한다.
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
//^ 요소의 `id` 속성 값을 얻거나 지정한다.
/*
const el = document.querySelector('.child')
console.log(el.id);

el.id = 'child1'
console.log(el.id);
console.log(el);
*/
//--------------------------------------------------------------------------

//* E.className
//^ 요소의 `class` 속성 값을 얻거나 지정한다.
/*
const el = document.querySelector('.child')
console.log(el.className);

el.className += ' child1 active' //! 띄어쓰기를 넣어야 구분이 된다
console.log(el.className);
console.log(el);
*/
//--------------------------------------------------------------------------

//* E.classList
//^ 요소의 `class` 속성 값을 제어한다.

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


//* E.style
//^ 요소의 `style`속성(인라인 스타일)의 CSS 속성 값을 얻거나 지정한다.
//! 인라인 스타일방식은 css를 다룰 때 조심해야한다 (우선순위 점수가 1000점이기 때문에 id선택자(100점)나 class선택자(10점)로는 덮어쓸수가 없다)
/*
const el = document.querySelector('.child')

// 개별지정! //!남발하지말고 그냥css파일 하나 만들던 html에 style태그를 먹여라
// el.style.width = '100px'
// el.style.fontSize = '80px'
// el.style.backgroundColor = 'green'
// el.style.position = 'absolute'

// 한번에 지정! //! 정적 메소드를사용
Object.assign(el.style, {
  width: '100px',
  fontSize: '20px',
  backgroundColor: 'green',
  position: 'absolute'
})
//~ 한두개의 css를 지정할대는 개별지정하는게 더 나을수는 있다 하지만 여러개의 css를 지정하게되면 한번에 지정하는 방식을 쓰는게 편하다


console.log(el.style);
console.log(el.style.width);
console.log(el.style.fontSize);
console.log(el.style.backgroundColor);
console.log(el.style.position);
//! 지정된게없어서 전부 빈칸이다.
*/
//--------------------------------------------------------------------------

//* window.getComputedStyle()

//^ 요소에 적용된 스타일 객체를 반환합니다.
//~ js를 통한 style을 먹이는게 아닌 이미 적용된 css를 확인할수 있다.
/*
const el = document.querySelector('.child')
const styles = window.getComputedStyle(el)

console.log(styles.width);
console.log(styles.fontSize);
console.log(styles.backgroundColor);
console.log(styles.position);
console.log(styles); //? reset.css를 먹이면 나타나는게 어떻게 되는거냐 궁금하네;;;
*/
//--------------------------------------------------------------------------

//* E.getAttribute() /E.setAttribute()

//^ 요소에서 특정 속성 값을 얻거나 지정한다.
//~ 속성이라는 개념은 html에서 말할때는 Attribute라는 단어를 사용하게된다.
//~ css,js에서 속성이라는 개념은 property라는 단어를 사용하게된다.

const el = document.querySelector('.child')

el.setAttribute('title','Hello World!')
console.log(el.getAttribute('title'));

//---------------------------------------------------------------------------

//* E.hasAttribute() /E.removeAttribute()

//^ 요소에서 특정 속성을 확인하거나 제거한다.
/*
const el = document.querySelector('.child')

console.log(el.hasAttribute('class'));

el.removeAttribute('class')
console.log(el.hasAttribute('class'));

console.log(el);*/