/* -------------------- */
/* Do While Loop        */
/* -------------------- */

// let i = 0;

// do {

//   console.log(i);

//   if(i === 3){
//     console.log('3번입니다.');
//   };

//   i++
// } while(i < 5)



// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// let result = prompt('순환될 횟수를 입력해주세요.');

// do {
//   console.log('최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.');
  
//   if(result < 0){
    
//     break;
//   }
  
//   result--;
// } while(result)


// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

// let count = 0;

// do {
//   console.log(count++);
  
// } while(result--)

let first = document.querySelector('.first');

console.log(first);

// first의 다음 요소 선택 => .second
//  do while을 사용해 원하는 노드를 선택할 때까지 반복되도록

// do {

//   first = first.nextSibling;

// } while(first.nodeType !== 1)
// 1 대신 document.ELEMENT_NODE로 써도 된다?(mdn 확인)


function next(node){

  do {

    node = node.nextSibling;

  } while(node.nodeType !== 1)

  return node;
}

const second = next(first);  // .second


function prev(node){

  do {

    node = node.previousSibling;

  } while(node.nodeType !== 1)

  return node;
}

const previous = prev(second);  // .first



function next2(node) {


  // node가 문자일 때만 
  if(typeof node === 'string'){
    node = document.querySelector(node);
  }  // validation -> 밸리데이션(확인)

  do {

    node = node.nextSibling;

  } while (node.nodeType !== 1);

  return node;
}

const nextElement = next2('.first'); // .second


function prev2(node){

  if(typeof node === 'string'){
    node = document.querySelector(node);
  }

  do {

    node = node.previousSibling;

  } while(node.nodeType !== 1)

  return node;
}

const previous2 = prev2('.second');  // .first


