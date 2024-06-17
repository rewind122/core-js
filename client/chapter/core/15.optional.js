/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */

const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q',
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
// console.log(portableFan.photos.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }

// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.
// portableFan && portableFan.photos && portableFan.photos.animate




// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.
portableFan.photos?.animate



// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.

const fullName = portableFan.getFullName?.();

// console.log(fullName);



// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.




// sync(동기)   async(비동기)
// 웹에서 제공하는 비동기처리 방식 web API

// setTimeout 윈도우의 메서드인 동시에 웹API?

/* 
console.log(1);
console.log(2);

function print(){
  console.log(3);
}

setTimeout(print,1000)
// js는 싱글스레드 방식이 기본이라 써있는 시간을 보장할 수 없음
// 보장하기 위해 async await callback 등등...

console.log(4);
console.log(5);
 */


// const button = document.querySelector('my-button');


// const id = setTimeout(()=>{

//   const template = /* html */`
//     <button type="button" class="my-button">my-button</button>
//   `
//   document.body.insertAdjacentHTML("beforebegin",template)
// },3000)

// id를 콘솔에 찍어봤을 때 반환되는 숫자가 타이머의 넘버(고유한 아이디)

// clearTimeout(id)

// button?.addEventListener('click',()=>{
//   console.log('clicked~!');
// })
// 오류 없이 실행시키려면 함수 안에 넣어라~


// 주기적 호출

let count = 0;
/* 
const id2 = setInterval(() => {
  console.log(++count);

  document.querySelector('.first').style.transform = `translateY(${count}px) rotate(${count}deg)`;

  if (count >= 360) {
    clearInterval(id2)
  }
}, 10);
 */

// clearTimeout(id2)
// clearInterval(id2)



// requestAnimationFrame() 애니메이션 만들 떄 쓰는 함수?
// 최신기술이라 똑똑(안보면 멈춤) 기본 프레임이 60이지만 각자 모니터 성능에 따라 달라짐(주사율에 따라~)

let counter = 0;

function animation() {
  console.log(++counter);

  const id = requestAnimationFrame(animation);

  if (counter >= 100) {
    cancelAnimationFrame(id);
  }
}

animation();












