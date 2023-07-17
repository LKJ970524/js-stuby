// For in 반복문
// 객체 데이터는 in을 사용한다

const user = {
  name: 'kyujeong',
  age: 27,
  isValid: true,
  email: 'asdfzxc@naver.com'
}

for (const sb in user) {
  console.log(sb);
  console.log(user[sb]);
}

// 주의할사항 : 작성순서대로 나열하는걸 보장할수 없음