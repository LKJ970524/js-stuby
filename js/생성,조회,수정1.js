// document.createElement()

// 메모리에만 존재하는 새로운 HTML오소를 생성해 반환한다
/*
const divEl = document.createElement('div')
console.log(divEl);

const inputEl = document.createElement('input')
console.log(inputEl);
*/
//--------------------------------------------------

// E.prepend() / E.append()

// 노드를 요소의 첫번째 혹은 마지막 자식으로 삽입합니다.
/*
const parentEl = document.querySelector('.parent')

const el = document.createElement('div')
el.textContent = 'Hello~'

parentEl.prepend(new Comment(' 주석 '))
parentEl.append(el, 'Text!')
*/
//-------------------------------------------------------

// E.remove()

// 요소를 제거합니다.
/*
const el = document.querySelector('.child')
el.remove()
*/
//----------------------------------------

//E.insertAdjacentElement()

// '대상 요소'의 지정한 위치에 '새로운 요소'를 삽입합니다.
// 대상_요소.insertAdjacentElement(위치, 새로운_요소)

/* html */ `
<!-- 'beforebegin' -->
<div class="target">
  <!-- 'afterbegin' -->
  Content!
  <!-- 'beforeend' -->
</div>
  <!-- 'afterend' -->`
/*
  const childEl = document.querySelector('.child')
  const newEl = document.createElement('span')
  newEl.textContent = 'Hello~'

  childEl.insertAdjacentElement('beforebegin', newEl)
  */

//------------------------------------------------------

// N.insertBefore()

// '부모 노드'의 자식인 '참조 노드'의 이전 형제로 '노드'를 삽입
// 부모_노드.insertBefore(노드, 참조_노드)
/*
const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')
const newEl = document.createElement('span')
newEl.textContent = 'Hello~'

parentEl.insertBefore(newEl,childEl)
*/

//--------------------------------------------------------------------

// N.contains()

// '주어진 노드'가 '노드'의 자신을 포함한 후손인지 확인합니다.
// 노드.contains(주어진_노드)
/*
const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')

console.log(parentEl.contains(childEl)); // true
console.log(document.body.contains(parentEl)); // true
console.log(document.body.contains(childEl)); // true
console.log(document.body.contains(document.body)); // true
console.log(parentEl.contains(parentEl)); // true
console.log(parentEl.contains(document.body)); // false
console.log(childEl.contains(document.body)); // false
*/

//----------------------------------------------------------------

// N.textContent

// 노드의 모든 텍스트를 얻거나 변경합니다.
/*
const el = document.querySelector('.child')
console.log(el.textContent);

el.textContent = '7'
console.log(el.textContent);
*/
//-------------------------------------------------------------------

// E.innerHTML

// 요소의 모든 HTML 내용을 하나의 문자로 얻거나,
// 새로운 HTML을 지정합니다.

const el = document.querySelector('.parent')
console.log(el.innerHTML);

el.innerHTML = /* HTML */ `
<div style="border: 4px dashed;">
  <span style="background: aqua;">Hello~</span>
  <span style="background: aqua;">Hello~</span>
</div>`