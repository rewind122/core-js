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


let userName = prompt('누구세요?');

if (userName?.toLowerCase() === 'admin') {
  let password = prompt('비밀번호는?');

  if (password?.toLowerCase() === 'themaster') {
    console.log('환영합니다!');

  } else if (password === null || password?.replace(/\s*/g, '') === '') {
    console.log('취소되었습니다.');

  } else {
    console.log('잘못된 비밀번호입니다.');
  }

} else if (userName === null || userName?.replace(/\s*/g, '') === '') {
  console.log('취소되었습니다.');

} else {
  console.log('존재하지 않는 회원 정보입니다.');
}

// 정규 표현식 https://regexr.com/
// optional chaining ? -> 나중에 다룰 것이다... 
























