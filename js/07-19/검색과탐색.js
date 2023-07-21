// document.getElementById()

// HTML `id` 속성 값으로 검색한 요소를 반환한다
// 여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환한다.
// 검색결과가 없으면, `null`을 반환한다.
/*
const el = document.getElementById('child2')  //! id를 통해서 검색할수 있는 기능
console.log(el);
*/
//--------------------------------------------------------------------

// document.querySelector()

// 'CSS' 선택자로 검색한 요소를 하나 반환한다.
// 여러 요소가 검색되며느 가장 먼저 찾은 요소만 반환한다.
// 검색결과가 없으면, `null`을 반환한다.
/*
const el = document.querySelector('.child:first-child')
console.log(el);
*/
//---------------------------------------------------------------------------

// document.querySelectorAll()

// 'CSS' 선택자로 검색한 모든요소를 `NodeList`로 반환한다.
// `NodeList` 객체는 `.forEach()`를 사용할 수 있다.
/*
const nodeList=document.querySelectorAll('.child')
console.log(nodeList);
nodeList.forEach(el => console.log(el.textContent))

console.log(Array.from(nodeList).reverse())
*/
//--------------------------------------------------------------------

//N.parentElement

// 노드의 부모요소를 반환합니다.
/*
const el = document.querySelector('child')
console.log(el.parentElement);
*/
//------------------------------------------------------------------

// E.closest()

// 자신을 포함한 조상 요소중 'CSS 선택자'와 일치하는,
// 가장 가까운 요소를 반환한다.
// 요소를 찾지 못하면 `null`을 반환한다.
//? 타겟이 이미지인데 우리는 li 가 필요하니까 이미지를 이용해서 li 를 잡아오기 위해서 이미지의 가장 가까운 부모요소인 li를 찾아오라는 closest('li') 를 작성해서
/*
const el = document.querySelector('.child')

console.log(el.closest('div'));
console.log(el.closest('body'));
console.log(el.closest('.hello'));
*/


// N.previousSibling / N.nextSibling

// 노드의 이전 형제 혹은 다음형제 노드를 반환한다. (노드에서만 사용한다.)
/*
const el = document.querySelector('.child')
console.log(el.previousSibling);
console.log(el.nextSibling);
*/
//-------------------------------------------------------------------

// N.previousElementSibling / N.nextElementSibling

// 요소의 이전 형제 혹은 다음형제 요소를 반환한다.

// const el = document.querySelector('.child')
// console.log(el.previousElementSibling);
// console.log(el.nextElementSibling);

//---------------------------------------------------------------

// E.children

// 요소의 모든 자식 요소를 반환한다.
/*
const el = document.querySelector('.parent')

console.log(el.children);

console.log(Array.from(el.children));
*/
//-------------------------------------------------------------------

// E.firstElementChild / E.lastElementChild

// 요소의 첫번째 자식 혹은 마지막 자식 요소를 반환한다.

const el = document.querySelector('.parent')
console.log(el.firstElementChild);
console.log(el.lastElementChild);