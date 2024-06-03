/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자 &&
let AandB = a && b;
console.log('AandB : ',AandB);

// 논리곱 할당 연산자 Logical AND Assignment
// a &&= b


// 논리합(또는) 연산자 ||
let AorB = a || b;
console.log('AorB : ',AorB);

// 논리합 할당 연산자 Logical OR Assignment
// a ||= b


// 부정 연산자
let reverseValue = !value;
console.log('reverseValue : ',reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};
console.log(whichFalsy);

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruthy:true};
console.log(whichTruthy);

// let userName = prompt('누구세요?');

// if (userName?.toLowerCase() === 'admin') {
//   let password = prompt('비밀번호는?');

//   if (password?.toLowerCase() === 'themaster') {
//     console.log('환영합니다!');

//   } else if (password === null || password?.replace(/\s*/g, '') === '') {
//     console.log('취소되었습니다.');

//   } else {
//     console.log('잘못된 비밀번호입니다.');
//   }

// } else if (userName === null || userName?.replace(/\s*/g, '') === '') {
//   console.log('취소되었습니다.');

// } else {
//   console.log('존재하지 않는 회원 정보입니다.');
// }

// 정규 표현식 https://regexr.com/
// optional chaining ? -> 앞의 값이 null 혹은 undefined가 뜨면 이하의 식을 실행하지 않는다.


// 함수를 사용하면 코드의 실행 흐름을 제어할 수 있다.

function login(){
  
  let userName = prompt('누구세요?');

  // userName이 null, undefined => 아래 코드 실행 안 함.

  if(userName === null || undefined) return;

  // 함수 안에서 return (녹음 다시 듣고 적어두기) 
  
  if (userName.toLowerCase() === 'admin') {
    let password = prompt('비밀번호는?');
  
    if (password.toLowerCase() === 'themaster') {
      console.log('환영합니다!');
  
    } else if (password === null || password.replace(/\s*/g, '') === '') {
      console.log('취소되었습니다.');
  
    } else {
      console.log('잘못된 비밀번호입니다.');
      login()
      // 함수 안에서 본인 함수 다시 호출 => 재귀함수
    }
  
  } else if (userName === null || userName.replace(/\s*/g, '') === '') {
    console.log('취소되었습니다.');
  
  } else {
    console.log('존재하지 않는 회원 정보입니다.');
  }
}

// 자바스크립트의 함수는 값처럼 취급됨

























