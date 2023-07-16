
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

document.querySelector('input.user-password-input').onclick =
  function loginId() {
    const idInput = document.querySelector('input.user-email-input');
    if (!emailReg(idInput.value)){
      idInput.classList.add('is--invalid');
    } else if (idInput.value !== user.id) {
      alert('아이디가 일치하지 않습니다'); 
    } else {
      idInput.classList.remove('is--invalid');
    }
  };

document.querySelector('button.btn-login').onclick =
function loginPw() {
  const pwInput = document.querySelector('input.user-password-input');
  if (!pwReg(pwInput.value)) {
    pwInput.classList.add('is--invalid');
  } else if (pwInput.value !== user.pw) {
    alert('비밀번호가 일치하지 않습니다.');
  } else {
    pwInput.classList.remove('is--invalid');
    window.location.href = 'welcome.html';
  }
};





// function toggleEvent(){

// }

// toggle : on/off switch, 스위치를 켰다, 껐다 하는 기능
// add(), remove() 메서드를 한번에 쓸 수 있도록 합쳐진 개념
// click 이벤트에 classList 이용하여 toggle로 css로 style을 준 클래스명을 on/off처리
// ※class 아니고 classList !
// 변수명.addEvent('click', function()){
//  변수명.classList.toggle('클래스명'); }

