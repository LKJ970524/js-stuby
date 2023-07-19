// DOM(Document Object Model)

//todo DOM이란 HTML 문서를 객체로 표현한 것으로,
//todo JS에서 HTML을 제어할 수 있게 해줍니다.
/*
const element = document.querySelector('h1')
console.log((element.textContent));*/

//DOM API

//---------------------------------------------------------

// NODE vs Element

// -노드(Node) : html요소,텍스트 주석 등 모든 것을 의미
// -요소(Element) : html 요소를 의미
/*
const parent = document.querySelector('.parent')

// 부모 요소의 모든 자식 노드 확인!
console.log(parent.childNodes);

// 부모 요소의 모든 자식 요소 확인!
console.log(parent.children);

console.dir(parent); //? 객체데이터로 표현하려면 log가 아닌 dir를 써보기

*/

class N {}
class E extends N {}

console.dir(E);
console.dir(N);
console.dir(E.__proto__);

console.dir(Element);
console.dir(Node);
console.dir(Element.__proto__);
//! .__proto__ 상위환경을 알려준다




// Object
//   ↓
// EventTarget
// - 이벤트 관련 기능을 제공
//   ↓
// Node
// - 공통 DOM 노드 프로퍼티를 제공
//   | —————————————————————————————————————————
//   ↓                    ↓                    ↓
// Element              Text                Comment
// - 요소 노드 메서드를 제공
//   | ————————————————————
//   ↓                    ↓
// HTMLElement       SVGElement
// - HTML 요소 메서드와 getter, setter를 제공
//   | —————————————————————————————————————————
//   ↓                    ↓                    ↓
// HTMLBodyElement  HTMLDivElement     HTMLButtonElement