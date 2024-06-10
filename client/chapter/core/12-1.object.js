/* --------- */
/* Object    */
/* --------- */

/* global isObject */


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: 800,
  height: '40vh',
  minHeight: 280,
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid: 'user-id-zke!@kheyhs',
  name: 'tiger',
  email: 'seonbeom2@gmail.com',
  isSignIn: false,
  permission: 'paid'  // paid | free
}

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

console.log( authUser.uid );
console.log( authUser.name );
console.log( authUser.email );
console.log( authUser.isSignIn );  // getter

console.log( authUser.permission = 'free' );  // setter

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

console.log(authUser['uid']);
console.log(authUser['name']);
console.log(authUser['email']);
console.log(authUser['isSignIn']); // getter
console.log(authUser['permission'] = 'allPass');  // setter





Object.prototype.nickName = '호랑이';


// 객체 안에 키가 있는지 확인 방법

// in 문

console.log( 'uid' in authUser );

for(let key in authUser){
  if({}.hasOwnProperty.call(authUser,key)){
    console.log(authUser[key]);
  }
}


// 객체의 key 만을 모아서 배열을 반환하는 메서드 Object.keys()

const keyList = Object.keys(authUser);

console.log( keyList );

// 객체의 value 만을 모아서 배열을 반환하는 메서드 Object.values()

const valueList = Object.values(authUser);

console.log( valueList );



// Object.keys() 만들기

function getPropertiesList(obj){

  let result = [];

  for(let key in obj){
    if({}.hasOwnProperty.call(obj,key)){
      result.push(key);
    }
  }

  return result;
}

getPropertiesList(authUser)  // ['uid', 'name', 'email', 'isSignIn', 'permission']


console.clear();


// 프로퍼티 제거(remove) or 삭제(delete)
//        비워두기(null)    메모리 날림

// 객체가 맞는지
function removeProperty(obj,key){
  if(isObject(obj)){
    obj[key] = null;
  }
}

removeProperty(authUser,'name')


function deleteProperty(obj,key){
  if(isObject(obj)){
    delete obj[key]
  }
}

deleteProperty(authUser,'name')



// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel


function createUser(name,age,phone){

  return {
    name:name,
    age:age,
    [calculateProperty]:phone
  }
}




// authentication

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin
}



// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(obj) {

  return Object.keys(obj).length ===0;
}

isEmptyObject({})  // true

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

// 구조 분해 할당을 이해하지 못하면 리액트를 사용할 수 없다...

// 순서(order)를 바꿀 수 없음. 변수명 O

const arr = [10,100,1000,10_000];

// const a0 = arr[0];
// const a1 = arr[1];
// const a2 = arr[2];
// const a3 = arr[3];

// const [a0,a1,a2,a3] = arr;
// 배열의 구조분해 할당은 안 쓰는 값을 비워둬도 무방

const [a0,...rest] = arr;  // 10, [100,1000,10_000]


for(let [key, value] of Object.entries(authUser)){

  // console.log( key, value );
}


const [first,second] = document.querySelectorAll('span');

// const first = spanList[0];
// const second = spanList[1];

// const first = document.querySelector('.first');
// const second = document.querySelector('.second');



/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */


// 순서를 고려하지 않음. key와 변수명이 동일해야 함 => 변수명 리네이밍 가능

const salaries = {
  함정민: 95,
  지유진: 110,
  이진용: 15,
  한상학: 300,
};

const {함정민:함, 지유진, 이진용, 한상학, 장주원 = 500} = salaries;
// 새로 추가한다고 객체에 새로운 값이 추가되지 않음(배열도 마찬가지)

// const 이진용 = salaries.이진용;
// const 지유진 = salaries.지유진;


function createUserObject({ 
  name: n, 
  age: a, 
  gender: g, 
  job: j = '홈프로텍터' 
} = {}){
  // 함수를 받음과 동시에 구조 분해 할당

  //                                          기본값
  // const {name:n, age:a, gender:g, job:j = '홈프로텍터'} = obj;

  return {
    name: n,
    age: a,
    gender: g,
    job: j,
  };
}

const person = createUserObject({
  name: 'beom',
  age: 40,
  gender: 'male',
  job: '개발자'
});


















