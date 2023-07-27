// 반복문에서 비동기 처리

const getMovies = movieName => {
  return new Promise(resolve => {
    fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
      .then(res => res.json())
      .then(res => resolve(res))
  })
}

const titles = ['frozen','avatar','avengers']

// titles.forEach(async title => {
//   const movies = await getMovies(title)
//   console.log(title, movies);
// }) //! 배열이 랜덤하게 배출된다!

const wrap = async ()=> {
  for (const title of titles){
    const movies = await getMovies(title)
    console.log(title,movies);
  }
} //! 배열 순서대로 배출하고 싶으면 forEach가 아닌 for문을 써서 배출시켜라!
wrap()