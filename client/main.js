import { 
  attr,
  clearContents,
  diceAnimation,
  getNode,
  getNodes,
  insertLast, 
} from './lib/index.js';


// 1. 주사위 애니메이션
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation() 실행될 수 있도록


const [rollingButton, recordButton, resetButton] = getNodes('.buttonGroup > button');

const recordListWrapper = getNode('.recordListWrapper');
// const recordTableBody = getNode('.recordList tbody');


// const rollingButton = buttonGroups[0];
// const recordButton = buttonGroups[1];
// const resetButton = buttonGroups[2];




let count = 0;
let total = 0;

function createItem(value){

  const template = `
    <tr>
      <td>${++count}</td>
      <td>${value}</td>
      <td>${(total += value)}</td>
    </tr>
  `;
}


function renderRecordItem(){

  // const diceValue = getNode('#cube').getAttribute('dice');
  const diceValue = +attr(getNode('#cube'), 'dice');


  insertLast('.recordList tbody', createItem(diceValue));
  
}


const handleRollingDice = (()=>{

  let isClicked = false;
  let stopAnimation;

  return ()=>{

    if(!isClicked){
  
      stopAnimation = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;
  
    }
    else{
  
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
  
    }
  
    isClicked = !isClicked;
  }

})()


function handleRecord(){
  recordListWrapper.hidden = false;

  renderRecordItem()
}

function handleReset(){
  recordListWrapper.hidden = true;
  clearContents('tbody');
  count = 0;
  total = 0;
}





rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);


