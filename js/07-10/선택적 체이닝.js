// 선택적 체이닝(Optional Chaining)
/*
const user = undefined

console.log(user?.name)   // 점표기법으로 표시할수 없는 데이터는 선택적 체이닝을 이용해 표기한다. */

//-------------------------------------------------------------------------------

const userA = {
  name: '이규정',
  age: '27',
  address: {
    country: 'Korea',
    city: 'Guri'
  }
}

const userB = {
  name: '이생성',
  age: '28'
}

function getCity(user) {
  return user.address?.city || '주소 없음.'
}

console.log(getCity(userA))
console.log(getCity(userB)) 

// 선택적 체이닝 사용시 주의해야하는것은? : 점표기법을 사용해야하지만 특수상황에서만 확실히 사용하고 이것을 남용해서는 안된다.