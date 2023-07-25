// Promise

//! promise는 생성자 함수이다.
//! '보장하려면!'


/*
const a = () => {
  return new Promise(resolve => {
    setTimeout(()=> {
      console.log(1);
      resolve()
    },1000)
  })
}
const b = () => {
  return new Promise(resolve => {
    setTimeout(()=> {
      console.log(2);
      resolve()
    },1000)
  })
}
const c = () => {
  return new Promise(resolve => {
    setTimeout(()=> {
      console.log(3);
      resolve()
    },1000)
  })
}
const d= () => console.log(4);

a()
  .then(b)
  .then(c)
  .then(d)
  .then(()=> console.log('sibal'))

*/

//--------------------------------------------------------


const getMovies = movieName => {
  return new Promise(resolve => {
    fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        resolve()
      })
  })
  
}

getMovies('frozen')
  .then(() => {
    console.log('겨울왕국');
    return getMovies('avengers')
  })
  .then(()=>{
    console.log('어벤져스!');
    return getMovies('avatar')
  })
  .then(()=>{
    console.log('아바타!');
  })
