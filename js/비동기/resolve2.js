// Resolve, Reject 그리고 에러 핸들링

const getMovies = movieName => {
  return new Promise((resolve, reject) => {
    fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
    .then(res => res.json())
    .then(json => {
      if (json.Response === 'false') {
        reject(json.Error)
      }
      resolve(json)
    })
    .catch(error => {
      reject(error) //! catch라서 에러를 가져왔다라 뭐라나;;;
    })
  })
}

let loading = true

// .then()
getMovies('avengers')
  .then(movies => console.log('영화목록:', movies))
  .catch(error => console.log('에러발생:', error))
  .finally(()=> loading = false)

// async/await
const wrap = async () => {
  try {
    const movies = await getMovies('avengers')
    console.log('영화목록:', movies);
  } catch (error){
    console.log('에러발생:', error);
  } finally {
    loading = false
  }
}
wrap ()