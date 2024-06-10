/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식

//                  rest parameter 나머지 파라미터(항상 맨 뒤 인자로 있어야 함)
//                - 유사배열이 아니기 때문에 바로 배열의 메서드를 쓸 수 있다는 장점
//                - 이름은 자유(args말고 딴 거 써도 됨!)
//                - 함수의 매개변수로 들어가면 레스트파라미터
//                - 밖 또는 함수 안에서 일어나면 전개 구문
let calcAllMoney = (...args) => {

  // 일반 함수 선언문과 함수 표현식에는 arguments가 있지만 화살표함수에는 arguments가 존재하지 않는다!
  
  let total = 0;
  
  // for 문
  // for(let i = 0; i < args.length; i++){
  //   total += args[i];
  // };

  // for..of 문
  // for(let value of args){
  //   total += value;
  // };

  // forEach
  // args.forEach(function(item){
  //   total += item;
  // })
  // args.forEach( item => total += item )

  // reduce
  // const result = args.reduce(function(acc,cur){
  //   return acc + cur
  // },0)
  return args.reduce((acc,cur) => acc + cur,0);

  
  // return total;
};

const calc = (...rest) => rest.reduce((acc,cur) => acc + cur, 0);

const result = calcAllMoney(1000,5000,4500,13000);

// console.log(result);

// 화살표 함수와 this

// function create(nickName, age){
//   return {
//     name:nickName,
//     age:age
//   };
// }

// create('tiger',40)

// 자바스크립트의 함수는 양면의 얼굴 => 일반 함수(normal function) / 생성자 함수(constructor function)


function Button(text){
  // 내가 누구에 의해 호출이 됐냐를 this로 결정
  this.content = text;
  // return text;
}

// const a = Button('more');
// 일반 함수의 호출 방식
const b = new Button('more');
// 생성자 방식의 함수 호출 => 무조건 객체 반환(return이 먹히지 않음!!)
// 객체 대량생산 용도
// 맨 앞글자 대문자 => 관례적으로 생성자 함수

// new String()
// new Number()
// new Object()
// new Array()
// => 모두 객체


// 화살표함수는 프로토타입을 내장하고 있지 않음(constructor를 내장하고 있지 않음!)
// 화살표함수는 새롭게 등장한 문법이기 때문~
// 생성자로서만 동작하는 함수는 class 문법


// 일반 함수
// - constructor 내장 (concise method는 예외)
// - this : 나를 호출한 대상을 this 라고 함
// - 객체의 메서드로 많이 사용됨 => this를 찾기 위해

// 화살표 함수
// - constructor 비내장
// - this : 바인딩 하지 않음 -> 상위 컨텍스트에서 찾음
// - 메서드 안의 함수를 작성해야 할 때 (내 상위 this를 가져오기 때문)

/* 
const user = {
  name: '심선범',
  sayHi: function(){
    console.log(this);
    // 여기서 this는 user를 가리킴
  },
  sayHi2: () => {
    console.log(this);
  },
  sayHi3(){
    console.log(this);
    // 일반함수처럼 동작하지만 constructor를 내장하지 않음
    // 객체의 메서드로 정의를 해야할 때는 concise method를 사용
  }
}
 */

const user = {
  name: '심선범',
  total: 0,
  grades: [30,60,80],
  /* totalGrades(){

    function sayHi(){
      console.log(this);
    }

    sayHi()
    // ~~~.메서드 로 호출하는 형태가 아니라면 호출한 것은 window
    // totalGrades <- user의 메서드임. user가 호출
    // sayHi <- user의 메서드가 아님. totalGrades함수가 window한테 불러달라고 한거
  } */
  /* totalGrades(){
    const sayHi = () => {
      console.log(this);
      // 화살표함수의 this는 무조건 window가 아니라 상위 컨텍스트의 this를 가져오는 거
      // 화살표함수는 자체적으로 this를 가지지 않으며, 부모의 this를 가져온다
    }

    sayHi()
  } */
  totalGrades(){

    this.grades.forEach(function(item){
      // console.log(this);
    })
  }
}

// user.totalGrades()

// 일반함수는 this를 호출했을 때 나를 호출한 대상을 찾아가는데
// 화살표함수는 this를 호출했을 때 상위 컨텍스트의 this를 찾아가는 것?
// forEach는 배열의 메서드지 특정 개체의 메서드가 아니라서 this가 window가 나오는 건가요? 이건 맞다고 하셧는데?? ?? ????? ???????? ??? 복습하면서 이해해보려고 노력하기

// 어 근데 화살표함수로 썼을때 왜 grades가 아니라 user가 나오나요?
// forEach는 grades에 의해 호출(여기서의 this는 grades가 아닌가요?)  => 그 내부의 화살표 함수는 그 this를 가져오면 grades 아닌가요...?

// 내부 함수에서 호출한 this를 찾아야해서 window가 나오는건가요?

// forEach는 콜백함수를 받음
// 물론 forEach는 grades가 불러옴.
// 근데 forEach에서 this를 찾는게 아니라 콜백 안에서 this를 찾는 것.
// 그럼 안의 function을 누가 돌리는거나? 콜백 함수 안에 들어가면 그냥 자체적으로 돌린 것(저절로 호출된 것!)


// 객체의 메서드를 정의하는 방법
// 객체의 메서드 => 객체 안의 함수?




/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
// let pow = (numeric,powerCount)=>{

//   let result = 1;

//   for(let i = 0; i < powerCount; i++){
//     result *= numeric
//   }
//   return result;
// }; 

// 표현식

// const pow = (numeric,powerCount) => {
  
//   return Array(powerCount).fill(null).reduce((acc)=>{
//     return acc *= numeric
//   },1)

// }


const pow = (numeric,powerCount) => Array(powerCount).fill(null).reduce(acc => acc *= numeric,1)

// repeat(text: string, repeatCount: number): string;
// let repeat = (text, repeatCount) => {

//   let result = '';

//   for(let i = 0; i < repeatCount; i++){
//     result += text;
//   }

//   return result;
// };

// const repeat = (text, repeatCount) => {
//   return Array(repeatCount).fill(null).reduce((acc)=>{
//     return acc + text
//   },'')
// };

const repeat = (text, repeatCount) => Array(repeatCount).fill(null).reduce((acc) => acc + text,'');
