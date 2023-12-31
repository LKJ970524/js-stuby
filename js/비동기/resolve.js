// Resolve, Reject 그리고 에러 핸들링

const delayAdd = index => {
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      if (index > 10) {
        reject(`${index}는 10보다 클 수 없다.`)
        return // 그래서 리턴을 사용해 함수를 종료한다
      }
      console.log(index); // resolve가 작동하지않지만 로그는 뜰수있다(다음내용 윗주석)
      resolve(index + 1)
    }, 1000);
  })
}

delayAdd(2) 
  .then(res => console.log(res))
  .catch(err => console.error(err)) //! catch는 에러를 전담마크한다.
  .finally(()=> console.log('done!')) //! 얘는 마참내라는 뜻으로 try, catch던 resolve, reject던 신경안쓰고 마지막에 항상 실행된다.

const wrap = async () => {
  try {
    const res = await delayAdd(9)
    console.log(res);
  } catch (err) {
    console.error(err);
  } finally {
    console.log('sibal!');
  }
}
wrap()








/*
resolve/reject 
	자바스크립트에서 자체 제공하는 콜백
		parameter파라매터 이므로 이름은 바꿔도 됨
	
	성공/실패는 전적으로 조건문 구조에 의거함
	
	둘중 하나는 무조건 호줄해야 함
	개발자는 resolve와 reject를 신경 쓰지 않고,
		executor 안 코드만 작성하면 됨

state/result
	개발자가 직접 컨트롤 할수 없음
	then/catch/finally로 접근 가능
	
	result
		resolve/reject의 알규먼트가 result고
		result는 자동으로, 
		then/catch의 알규먼트로 들어간다
	
	state
		프라미스의 상태
		
		보류pending
			디폴트 값
			result의 값 = undefined
		
		fulfilled
			resolve가 호출된 경우 이것으로 변경
			result의 값 = value
		
		rejected
			rejected가 호출된 경우 이것으로 변경
			result의 값 = error

then/catch/finally
	
	then
		프라미스에서 가장 중요한 메서드임
		함수에 인과관계를 설정해줌
		resolve의 반환값은 then의 result의 알규먼트로 자동전달 됨
		
		then의 프라미스 체이닝 promise chaining
			.then을 걸면 then의 return은 
				프로토타입 Promise를 가진 객체이지만,
					result고 뭐고 없기 때문에 
					새 프라미스 객체를 
						then의 함수에서 리턴해줘야 한다
		
		promise.then(
			function(result) {  결과(result)를 다룹니다  },
			function(error) {  에러(error)를 다룹니다  }
		);
				
				then은 함수를 2개 받을 수 있다
					앞의 함수는 성공
					뒤의 함수는 실패
						실패영역은 생략 가능하며, 그럴시 catch에서 처리함
	
	catch
		try/catch의 그것과 유사함
		에러를 전담마크 함
		
		promise.then().catch
		
		let promise = new Promise((resolve, reject) => {
			setTimeout(() => reject(new Error("에러 발생!")), 1000);
		});
		
		.catch(f)는 promise.then(null, f)과 동일하게 작동합니다
		promise.catch(alert); //! 1초 뒤 "Error: 에러 발생!" 출력
*/