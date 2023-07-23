
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const navButtons = document.querySelectorAll('.nav li button');
const visualImage = document.querySelector('.visual img');
const container = document.querySelector('.container');

navButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const dataIndex = event.target.closest('li').getAttribute('data-index');
    const selectedData = data[dataIndex - 1];
    const { alt, color } = selectedData;

    // Change the visual image and nickname
    visualImage.src = event.target.closest('img').src;
    container.querySelector('.nickName').textContent = alt;

    // Change the active button and background color
    navButtons.forEach((navButton) => navButton.parentElement.classList.remove('is-active'));
    button.parentElement.classList.add('is-active');
    container.style.background = `linear-gradient(to right, ${color[0]}, ${color[1]})`;
  });
});














