// 동기(Synchronous)와 비동기(Asynchronous)
// -동기: 순차적으로 코드 실행 O
// -비동기: 순차적으로 코드 실행 X //! setTimeout은 대표적인 비동기코드이다.
/*
console.log(1);
// console.log(2);
setTimeout(()=>{console.log(2)},1000)
console.log(3);
*/
//------------------------------------------------
/*
const btnEl = document.querySelector('h1')
btnEl.addEventListener('click', ()=> {
  console.log('Clicked!');
})

console.log('Hello world');
*/
//------------------------------------------------


//~ fetch는 서버에 api같은것을 요청(Request)할때 사용된다.
//~ fetch는 네트워크 연결이 원할할때 사용가능하다 인터넷이 안되면 응답이 안됨

fetch('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
  .then(res => res.json())
  .then(res => {
    console.log(res)
    console.log(1);
    console.log(2);
    console.log(3);
  })
