/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

[1000,5000,2500].forEach(function(){})



// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (){

  // arguments => 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사배열이라 불리는 지역 변수

  let total = 0;
  // for(let i = 0; i < arguments.length; i++){
  //   total = total + arguments[i];
  // }

  // for(let value of arguments){
  //   total += value;
  // }


  // arguments => array
  // 가장 쉬운 방법은 전개구문 ... !!!
  // Array.from()
  // Array.prototype.slice.call()


  // const arr = [...arguments];
  // const arr = Array.from(arguments);
  const arr = Array.prototype.slice.call(arguments);


  // forEach
  // 배열의 개수만큼 알아서 반복 => 무한루프에 빠질 일도 없다!!
  // arr.forEach(function(price){
  //   total += price;
  // })
  // 반환 x !! 콜백 함수에 return 써도 반환 안 해줌

  // arr.forEach((price) => total += price)


  // reduce
  // const result = arr.reduce(function(acc, cur){
  //   return acc + cur
  // }, 0)

  // const result = arr.reduce((acc, cur) => acc + cur, 0)
  // return result;



  // return arr.reduce((acc, cur) => acc + cur, 0);

  // 빌려쓰기(1회성)
  // Array.prototype.forEach.call(arguments,function(item){
  //   total += item
  // })


  // 태생을 배열로 바꾸기(조상 바꿔치기)
  // __proto__ => 조상 찾기?
  // 지역변수이기 때문에 전역 오염이 아니라 괜찮을 듯? 
  arguments.__proto__ = Array.prototype
  // console.log(arguments);

  
  return total;

};


// let calculateTotal2 = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

const result = calculateTotal(1000,5000,2500,500);
// console.log(result);


// forEach => 배열 순환 값 반환 x
// reduce  => 배열 순환 값 반환 o  숫자/문자/배열/객체 전부 반환
// map     => 배열 순환 값 반환 o  only 배열만 반환!
// filter  => 배열 순환 값 반환 o  only 배열만 반환!


const arr = ['이민지', '안재명', '함정민'];

const mapValue = arr.map(function(item,index){
  return '멋쟁이-' + item
});

console.log( mapValue );
// map => 원본을 훼손하지 않기 때문에 많이 사용







// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function(){};

// 유명(이름을 가진) 함수 (표현)식
// 호출할 때는 선언한 변수로(잘 쓰지 않음)
let namedFunctionExpression = function hello(){};

// 콜백 함수 (표현)식
let cb = function(isActive,success,fail){

  if(isActive){
    success()
  }else{
    fail()
  }

};

cb(
  false,
  function(){
    console.log('성공입니다!');
  }, 
  function(){
    console.log('실패입니다...');
  })



  function movePage(url, success, fail){

    if(url.includes('https')){
      success(url)
    }else{
      fail()
    }
  }



  movePage(
    'https://www.daum.net',
    function(url){
      console.log( url );
      console.log(`현재 입력하신 url은 ${url} 입니다. 3초 뒤 해당 사이트로 이동합니다.`);

      // location.href = url
    },
    function(){
      console.log('잘못된 url을 입력하셨습니다.');
    }
  )
  // 콜백함수를 쓰는 이유 안쪽에 있는 값을 밖으로 꺼내서 쓰기 위함



  // higher-order function 고차함수

  // 함수를 인수로 받아 처리함
  // 함수를 리턴함

  // 함수를 연결해서 사용?(커링?)
  // 고차함수를 잘 쓰면 함수형 프로그래밍을 하기 능숙해진다 ...




// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
// 오늘날에는 캡슐화 목적으로는 자주 사용되지 않는다!
// closure에서 많이 씀 ... 
let IIFE;

// 함수가 선언됨과 동시에 실행되는 것을 말합니다. 

// var는 블록 스코프 : x
// var는 함수 스코프 : o
// 스코프를 만들어서 보호하기 위해 사용
// 하지만 var를 보호하기 위해서만 쓰는 것은 아니다!

// encapsulation (캡슐화)
// 모듈 프로그래밍 => (import, export)

/* 
(function (){

  console.log('안녕~~!!');

})()
 */
/* 
const MASTER = (function () {
  let uuid = 'azxcqwASFqjKJ112314!23';

  return {
    getKey() {
      return uuid;
    },
    setKey(value) {
      uuid = value;
    },
  };
})();
 */
// 리턴된 두 함수가 MASTER의 메서드로 들어간 것
// uuid라는 변수를 보호하기 위해~ 


// 캡슐화 => 유지보수와 코드보호 목적



























