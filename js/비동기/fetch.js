// fetch(주소, 옵션)
//~ 네트워크를 통해 리소스의 요청(Request) 및 응답(Response)을 처리할수 있다.
//~ promise 인스턴스를 반환한다.

fetch('https://www.omdbapi.com/?apikey=7035c60c&s=avengers', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name:'Kyu Jeong',
    age: 27,
    eamil: 'dlrbwjd7096@naver.com'
  })
})
  .then(res => res.json())
  .then(json => console.log(json))

const wrap = async () => {
  const res = await fetch('https://www.omdbapi.com/?apikey=7035c60c&s=avengers')
  const json = await res.json()
  console.log(json)
} 
wrap()