/* ------------ */
/* For Loop     */
/* ------------ */

// 2 ~ 10까지의 짝수 출력하기
let j = 1;

while (j <= 10) {
  j++

  if (j % 2 !== 0) continue;

  // console.log(j);
}

let p = 0;

for (; p <= 10;) { // step을 괄호 안에 쓰면 0도 출력된다...

  p++
  
  if (p % 2 !== 0) continue;

  // console.log(p);
}




const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');
// split 괄호 안 문자를 기준으로 잘라 배열을 반환

let i = 0;
let l = frontEndDev.length;

while (i < l) {
  // console.log(frontEndDev[i]);
  i += 1;
}

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

for (let i = 0; i < l; i++) {
  let value = frontEndDev[i];
  let lower = value.toLowerCase();

  // if (lower.includes('svg') || lower.includes('jquery')) continue;

  if (lower.includes('jquery')) break;

  // console.log(value);
}


//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.

//   - 무한 루프 (브레이크)
//   - for 문 (역순환)

for (let i = 0; i < l; i++) {

  console.log( frontEndDev.pop() );
  
}

// 배열의 메서드
// pop: 배열의 마지막 항목을 제거하고 제거한 항목을 반환
// shift: 배열의 맨 앞 항목을 제거하고 제거한 항목을 반환



















