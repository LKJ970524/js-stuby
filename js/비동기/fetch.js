// fetch(주소, 옵션)
//~ 네트워크를 통해 리소스의 요청(Request) 및 응답(Response)을 처리할수 있다.
//~ promise 인스턴스를 반환한다.

fetch('https://www.omdbapi.com/?apikey=7035c60c&s=avengers', {
  method: 'GET', //! get은 안써도 자동으로 쓰이기때문에 표현을 하지 않는다(서버에서 요구하는 해당값을 정확하게 입력해야한다)
  headers: {
    'Content-Type': 'application/json'
  },//! 페이지에 대한 정보(요청에 대한 정보)
  body: JSON.stringify({ //! 인수로들어온 자바스크립트 데이터를 다 문자화로 변경한다.
    name: 'KyuJeong',
    age: 27,
    email: 'dlrbwjd7096@naver.com'
  }) //! 페이지의 구조 (요청에대한 데이터를 받을수 있다)
})
  .then(res => res.json())
  .then(json => console.log(json))

const wrap = async () => {
  const res = await fetch('https://www.omdbapi.com/?apikey=7035c60c&s=avengers')
  const json = await res.json()
  console.log(json)
} 
wrap()