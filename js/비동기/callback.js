// 콜백 패턴
//! 콜백 함수는 나중에 호출할 함수를 의미합니다.

/*
const a = (callback) => {
  setTimeout(() => {
    console.log(1)
    callback()
  },1000)
}
const b = (callback) => {
  setTimeout(() => {
    console.log(2);
    callback()
  },1000)
}

const c = (callback) => {
  setTimeout(() => {
    console.log(3);
    callback()
  }, 1000);
}

const d = () => console.log(4);


a(()=>{
  b(()=> {
    c(() => {
      d()
    })
  })
})


*/

// 콜백지옥(멸망의 피라미드)
//~ 비동기에서 순서를먹여서 코드를 실행하지만 단점으로는 들여쓰기처럼 안쪽으로 들어가는 효과가 생겨서 난독이 생길수있다.






const getMovies = (movieName, callback) => {
  fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
  .then(res => res.json())
  .then(res => {
    console.log(res)
    callback()
  })
}

getMovies('frozen', ()=> {
  console.log('겨울왕국!');
  getMovies('avengers', ()=> {
    console.log('어벤져스!');
    getMovies('avatar', ()=> {
      console.log('아바타!');
    })
  })
})

