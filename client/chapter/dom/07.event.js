/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

function handler() {
  console.log('클릭 이벤트 발생!!!');
}

// 2. DOM 프로퍼티 : element.onclick = handler
const first = getNode('.first');
// first.onclick = handler;

// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handleClick(e) {
  console.log(e.type);
  console.log(e.target);
  console.log(e.offsetX);
}

const second = getNode('.second');

// second.addEventListener('click',firstEventRemove)

// function bindEvent(node, type, handler) {
//   if (isString(node)) node = getNode(node);

//   node.addEventListener(type, handler);

//   return () => node.removeEventListener(type, handler);
// }

// const firstEventRemove = bindEvent('.first', 'click', handleClick);

// second.addEventListener('click', firstEventRemove);

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener






const ground = getNode('.ground');
const ball = getNode('#ball');



function handleClickBall({ offsetX: xPos, offsetY: yPos }) {
  // const { offsetX:x, offsetY:y } = e;

  // let x = e.offsetX;
  // let y = e.offsetY;

  let w = ball.offsetWidth;
  let h = ball.offsetHeight;

  ball.style.transform = `translate(${xPos - (w / 2)}px,${yPos - (h / 2)}px)`;
}


// ground.addEventListener('click', handleClickBall)




function handleMove({offsetX:x, offsetY:y}){

  // ball.style.transform = `translate(${x}px, ${y}px)`

  let template = /* html */ `
    <div class="emotion" style="top:${y - 16}px; left:${x - 16}px;">🥹</div>
  `

  insertLast(ground,template)

}


// throttle (수도꼭지), debounce (공 튀김 방지)



function debounce(callback,limit = 500){
  
  let timeout;
  
  return function(e){
    clearTimeout(timeout);

    timeout = setTimeout(()=>{
      callback.call(this, e)
    },limit)
  }
}



// ground.addEventListener('mousemove', debounce(handleMove))



// call(this,a,a,a,a,a), apply(this,[a,a,a,a,a])


function throttle(callback,limit = 500){
  
  let waiting = false;
  
  return function(e){
    if(!waiting){
      callback.call(this, e)
      waiting = true;

      setTimeout(()=>{
        waiting = false;
      },limit)
    }
  }
}


throttle(()=>{
  console.log('hello throttle?');
})


ground.addEventListener('mousemove', throttle(handleMove,100));

















