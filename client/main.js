/* global gsap */

import { 
  tiger, 
  delayP, 
  getNode, 
  changeColor,
  renderSpinner,
  renderUserCard,
  renderEmpthCard,
  clearContents,
} from './lib/index.js';



const ENDPOINT = 'http://localhost:3000/users';






const userCardInner = getNode('.user-card-inner');



async function renderUserList(){

  // 로딩 스피너 렌더링
  renderSpinner(userCardInner)


  // await delayP(2000);

  try{

    
    gsap.to('.loadingSpinner',{
      opacity:0,
      onComplete(){
        this._targets[0].remove();
      }
      // 순수 자바스크립트로는 transitionend 이벤트를 이용!
    })
    // getNode('.loadingSpinner').remove()

    const response = await tiger.get(ENDPOINT);

    const data = response.data;

    data.forEach((user) => renderUserCard(userCardInner, user));

    changeColor('.user-card');

    gsap.from('.user-card', {
      x: -100,
      opacity: 0,
      stagger: {
        amount: 1,
        from: 'start',
      },
    });
  }
  catch{
    console.error('에러가 발생했습니다!')
    renderEmpthCard(userCardInner)
  }

}


renderUserList()















function handleDeleteCard(e){
  const button = e.target.closest('button');

  if(!button) return;

  const article = button.closest('article');

  const index = article.dataset.index.slice(5);


  tiger.delete(`${ENDPOINT}/${index}`)
  .then(()=>{
    // 요청 보내고 렌더링하기
    // 이전 데이터를 지우고 다시 받아서 렌더링 해줘야... 
    clearContents(userCardInner)
    renderUserList()
  })

}


userCardInner.addEventListener('click', handleDeleteCard)



const createButton = getNode('.create');
const cancelButton = getNode('.cancel');
const doneButton = getNode('.done');






function handleCreate(){

  gsap.to('.pop', { autoAlpha: 1 });
}

function handleCancel(e) {

  e.stopPropagation();

  gsap.to('.pop', { autoAlpha: 0 });
}

function handleDone(e){
  e.preventDefault();

  const name = getNode('#nameField').value;
  const email = getNode('#emailField').value;
  const website = getNode('#siteField').value;

  

  tiger.post(ENDPOINT,{name, email, website})
  .then(()=>{
    // 1. 팝업 닫기
    e.stopPropagation();
    gsap.to('.pop', { autoAlpha: 0 });
    // 2. 카드 컨텐츠 비우기
    clearContents(userCardInner);
    // 3. 유저카드 렌더링하기
    renderUserList();
  })

  

}





createButton.addEventListener('click',handleCreate)
cancelButton.addEventListener('click',handleCancel)
doneButton.addEventListener('click',handleDone)








































