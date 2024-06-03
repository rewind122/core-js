/* --------------- */
/* While Loop      */
/* --------------- */

// let i = 10;

// while(i > 0){
//   console.log(i--);
// }



const frontEndDev = ['HTML', 'CSS', 'SVG', 'JavaScript', 'jQuery', 'React', 'Redux', 'Zustand', 'Lit'];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);
// console.log(frontEndDev[6]);

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)
let array = 0;

while(array < frontEndDev.length){

  let value = frontEndDev[array];

  // console.log(value);
  array++
}


// while 문 (역순환 : 역방향)
let array2 = frontEndDev.length - 1;

while (array2 >= 0) {
  let value = frontEndDev[array2];

  console.log(value);
  array2--;
}

// 성능 진단 : 순환 vs. 역순환 => 오늘날에는 큰 차이 없음




