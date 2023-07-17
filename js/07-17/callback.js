// 콜백(Callback)
//? callback은 하나의 함수이다.
/*
const a = callback => {
  console.log('A')
  callback()
}

const b = () => {
  console.log('B');
}

a(b)


const sum = (a, b, c) => {
  setTimeout(() => {
    c(a + b)
  }, 3000);
}

sum(3,5, value => {
  console.log(value)
})
sum(8,7, value => {
  console.log(value);
})
*/



//----------------------------------
// https://www.gstatic.com/webp/gallery/4.jpg

const loadImage = (url, cb) => {
  const imgEl = document.createElement('img')
  imgEl.src = url
  imgEl.addEventListener('load', () => {
    setTimeout(() => {
      cb(imgEl)
    }, 1000);
  })
}

const containerEl = document.querySelector('.container')
loadImage('https://www.gstatic.com/webp/gallery/4.jpg', imgEl => {
  containerEl.innerHTML = ''
  containerEl.append(imgEl)
})