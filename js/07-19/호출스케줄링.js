// 호출 스케줄링(Scheduling a function call)

const hello = () => {
  console.log('hello~');
}
const timeout = setInterval(hello, 2000)
const h1El = document.querySelector('h1')
h1El.addEventListener('click', ()=>{
  console.log('Clear!');
  clearInterval(timeout)
})