// 재귀(REcursive)
//? '함수 자기 자신을 내부에서 다시 호출한다' 라는 개념(멈추는 조건도 같이 넣어놔라 무한루프다 이자슥아)

/*
let i = 0
const a = () => {
  console.log('A');
  i += 1
  if (i<4){
    a()
  }
}

a()
*/


//-------------------------------------
const userA = {name: 'A', parent: null}
const userB = {name: 'B', parent: userA}
const userC = {name: 'C', parent: userB}
const userD = {name: 'D', parent: userC}

const getRootUser = user => {
  if (user.parent) {
    return getRootUser(user.parent)
  }
  return user
}

console.log(getRootUser(userD));