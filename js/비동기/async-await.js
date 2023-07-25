// Async / Await

//! 서버와 통신이 필요한 외부 api를 사용하신다면 절대적으로 async await이 필요합니다

/*
const a = () => {
  return new Promise(resolve => {
    setTimeout(()=>{
      console.log(1);
      resolve()
    },1000)
  })
}
const b = () => console.log(2);

// a().then(() => b())

const wrap = async() => {
  await a()
  b()
}
wrap()*/
//! await는 프로미스 함수가 실행되어야 동반이 가능하다.
//! await의 단점은 async가 붙은 함수에서만 사용이 가능하다


//----------------------------------------------------------

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

// getMovies('frozen')
//   .then(() => {
//     console.log('겨울왕국');
//     return getMovies('avengers')
//   })
//   .then(()=>{
//     console.log('어벤져스!');
//     return getMovies('avatar')
//   })
//   .then(()=>{
//     console.log('아바타!');
//   })


const wrap = async() => {
  await getMovies('frozen')
  console.log('레릿고~');
  await getMovies('avengers')
  console.log('어셈블');
  await getMovies('avatar')
  console.log('또루크막토');
}
wrap()

//! promise에서 반환되는 객체만 async await사용이 가능하다