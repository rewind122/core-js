import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './type.js';




function delay(callback,timeout = 1000){
  setTimeout(callback,timeout);
}

const first = getNode('.first');
const second = getNode('.second');





// delay(()=>{
//   first.style.top = '-100px';
//   second.style.top = '100px';
//   delay(()=>{
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg)';
//     delay(()=>{
//       first.style.top = '0px';
//       second.style.top = '0px';
//     })
//   })
// })



// 애니메이션 시간이 달라진다면? 일일이 고쳐줘야하나?
// 애니메이션 단계가 늘어난다면? 하나하나 추가해줘야 하나?
// 가독성도 너무 안 좋음!!
// 시간을 보장할 수도 없음!!

// 프라미스를 사용해보자!

// 생성할 때 무조건 콜백함수 넣어줘야함
// 콜백함수의 매개변수 둘 다 함수로 정해져있음
// resolve 성공 reject 실패 (동시에 실행시킬 수 없음)
// 


const shouldRejected = false;

const p = new Promise((resolve,reject)=>{

  if(!shouldRejected){

    resolve('성공!!');   // PromiseResult에 매개변수가 담기게 됨
  }else{
    
    reject('실패!');
  }

});

// console.log(p);
// PromiseState: pending 아무것도 실행하지 않음
// PromiseState: fulfilled 성공
// PromiseState: rejected 실패




// function delayP(timeout = 1000){

//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       if(!shouldRejected){
//         resolve('성공!!');
//       }
//       else{
//         reject('실패!!');
//       }
//     },timeout);
//   })
// }

// delayP()
// .then((res)=>{
//   // console.log(res);
//   first.style.top = '-100px';
//   second.style.top = '100px';

//   return delayP();   // setTimeout이 필요하기 때문에 delayP() 반환
// })
// .then((res)=>{
//   // console.log(res);
//   first.style.transform = 'rotate(360deg)';
//   second.style.transform = 'rotate(-360deg)';

//   return delayP();
// })
// .then((res)=>{
//   // console.log(res);
//   first.style.top = '0px';
//   second.style.top = '0px';

//   return delayP();
// })



// 프라미스 객체를 반환하는 형태로 사용
// PromiseResult에 접근하려면 then 메서드를 받아야 함?
// then은 두 개의 콜백을 받음 : 성공, 실패

// delayP()
// .then((result)=>{
//   console.log(result);   // PromiseResult의 값을 받아옴
// },
// (err)=>{
//   console.log(err);
// })

// 프라미스의 메서드는 거의 다 프라미스 객체를 반환 => 뒤에 연결해서 사용 가능
// 프라미스 객체를 return해줘야 프라미스 체이닝이 가능?은 아님?

// .catch() : 위에서 떨어진 객체의 에러를 전부 받아줌
// 매번 에러를 받고싶다면 then의 두번째 콜백을 써줌
// then은 기본적으로 알아서 프라미스 객체를 리턴하지만 result값 가질수 없는 그냥 빈 껍데기고 리턴문을 통해 프라미스 객체를 반환하면 result를 가질수 있다?
// 명시적으로 리턴값을 정해주면 PromiseResult 값이 그걸로 변한다.
// 여기서 setTimeout을 주는 이유는 실제 통신할 때 생기는 딜레이를 구현하기 위해서고 실제 통신할 때는 setTimeout줄 필요없다.
// then의 매개변수를 하나만 받는 상황에서 실패한 결과값이 떨어지면 => uncaught 에러 발생! 마지막에 catch로 잡아주면 된다.
//  uncaught로 나왔다는 건 핸들링이 안됐다는거라서 catch로 잡아서 처리해주는거



// 객체 합성

const defaultOptions = {
  shouldRejected: false,
  data: '성공!!',
  errorMessage: '알 수 없는 오류!',
  timeout: 1000,
};

function delayP(options){

  let config = { ...defaultOptions };

  if(isNumber(options)){
    config.timeout = options;
  }

  if(isObject(options)){
    config = { ...defaultOptions, ...options };
  }

  console.log(config);

  let { shouldRejected, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve(data);
      } else {
        reject({ message: errorMessage });
      }
    }, timeout);
  });
}


delayP();
















