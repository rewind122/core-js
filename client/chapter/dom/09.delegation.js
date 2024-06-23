/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

const nav = getNode('nav');



function handleClick(e) {
  // console.log(e.target);

  const target = e.target;
  const name = target.dataset.name;
  const li = target.closest('li');
  // 클래스나 속성 사용 시에도 target보다는 li를 사용하는 것이 안전?

  // console.log(li);

  /* 클래스를 사용한 위임 ---------------- */

  // if(target.matches('.about')) console.log('about!!');
  // if(target.classList.contains('home')) console.log('home!!');
  // if(target.classList.contains('contact')) console.log('contact!!');


  /* 속성을 사용한 위임 ------------------ */
  // console.log(target.getAttribute('data-name'));
  // console.log(target.dataset.name);
  // console.log(attr(target, 'data-name'));

  // if(name === 'about') console.log('about !_!');
  // if(name === 'home') console.log('home !_!');
  // if(name === 'contact') console.log('contact !_!');


  /* 노드를 사용한 위임 ------------------ */

  // 정확히 li만 조회

  // if(target.tagName !== 'LI') return;
  
  // if(target.textContent.includes('ABOUT')) console.log('about !_!');
  // if(target.textContent.includes('HOME')) console.log('home !_!');
  // if(target.textContent.includes('CONTACT')) console.log('contact !_!');


  if(!li) return;   // 뎁스 구조 변경 시

  if(li.textContent.includes('ABOUT')) console.log('about !_!');
  if(li.textContent.includes('HOME')) console.log('home !_!');
  if(li.textContent.includes('CONTACT')) console.log('contact !_!');
}

// nav.addEventListener('click', handleClick);



const navList = document.querySelectorAll('nav li');

navList.forEach((li, i) => {
  li.addEventListener('click', () => {
    console.log(i);

    switch (i) {
      case 0:
        console.log('about');
        break;
      case 1:
        console.log('home');
        break;
      case 2:
        console.log('contact');
        break;
    }
  });
});

