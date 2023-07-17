// 콜백(Callback)
//? callback은 하나의 함수이다.
//* callback은 함수가 실행될때 인수를 넣어주는 개념(그래서 그게 뭔데;;;)
/*
const a = callback => {
  console.log('A')
  callback()
}

const b = () => {
  console.log('B');
}

a(b)
*/
/*
const sum = (a, b, c) => {
  setTimeout(() => {
    c(a + b)
  }, 2000);
}

sum(3,5, value => {
  console.log(value)
})
sum(8,7, function (value) {
  console.log(value);
}) // 일반함수를 써보았음
*/
//! 다른함수가 호출될때 그 함수호출의 인수로 사용되는 함수를 말한다.
//! 함수가 하나의 데이터라는 것을 응용해서 다른함수의 인수로 전달하면서 다른함수의 내부에서 호출하는 개념


//----------------------------------
// https://www.gstatic.com/webp/gallery/4.jpg

const loadImage = (url, cb) => {
  const imgEl = document.createElement('img')
  imgEl.src = url
  imgEl.addEventListener('load', () => {
    setTimeout(() => {
      cb(imgEl)
    }, 2000);
  })
}

const containerEl = document.querySelector('.container')
loadImage('https://www.gstatic.com/webp/gallery/4.jpg', imgEl => {
  containerEl.innerHTML = ''
  containerEl.append(imgEl)
})