const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header');

const h = (t) => (t.style.height = 0);

aList.forEach((a) => {
  a.addEventListener('mouseenter', () => {
    const target = a.lastElementChild;

    // 모든 depth 높이를 0
    depthList.forEach(h);
    // 반환하는 값이 함수에 전달하는 인수와 동일하다면 함수를 생략해서 적는 게 가능?

    target.style.height = '100px';
  });
});

header.addEventListener('mouseleave', () => depthList.forEach(h));
