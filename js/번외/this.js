// this
// 일반 함수(function을 사용하는 경우)의 this는 호출 위치에서 정의
// 화살표 함수의 this는 자신이 선언된 함수(렉시컬) 범위에서 정의
// 렉시컬(Lexical)이란 함수가 동작할 수 있는 유효한 범위를 의미합니다.


// 일반함수 예제-------------------------------------------------
/* const user = {
  firstName : 'kyujeong',
  lastName : 'Lee',
  age : 27,
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
} */

/*function user() {
  this.firstName = 'Neo'
  this.lastName = 'Anderson'

  return {
    firstName: 'Kavin',
    lastName: 'Lee',
    age : 27,
    getFullName() {
      return `${this.firstName} ${this.lastName}`
    }
  }
}*/

// 화살표함수 예제---------------------------------------------
/* function user() {
  this.firstName = 'Neo'
  this.lastName = 'Anderson'

  return {
    firstName: 'Kavin',
    lastName: 'Lee',
    age : 27,
    getFullName: () => {
      return `${this.firstName} ${this.lastName}`
    }
  }
} */

/*const lewis = {
  firstName: 'Lewis',
  lastName: 'Yang'
}

const u = user()
console.log(u.getFullName())
console.log(u.getFullName.call(lewis));*/









/*

// function---------------------------------------------------------------
const timer = {
  title: 'TIMER!',
  timeout() {
    console.log(this.title);
    setTimeout(function () {
      console.log(this.title)
    }, 2000)
  }
}
timer.timeout()*/

//화살표함수---------------------------------------------------------------
const timer = {
  title: 'TIMER!',
  timeout() {
    console.log(this.title);
    setTimeout(() => {
      console.log(this.title)
    }, 1000)
  }
}
timer.timeout()