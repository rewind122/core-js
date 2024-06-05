/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};

Object.prototype.nickName = '호랑이';

// in: 배열/객체의 어떤 키 값을 가지고 있는지(true/false) 확인?
// in은 조상이 가지고 있는 것까지 찾아냄(자바스크립트 객체의 특징)
// 자바스크립트는 조상(Object)를 훼손하는 것도 가능




// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고(has)있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
// hasOwnProperty()

// console.log(javaScript.hasOwnProperty('creator'));
// 이렇게 쓰면 오염될 여지가 있음 -> 안전하게 쓰려면 본체의 메서드를 빌려 써야함

                                          // 메서드 빌려쓰기(함수의 메서드)
// console.log(Object.prototype.hasOwnProperty.call(javaScript, 'nickName'));
// console.log( {}.hasOwnProperty.call(javaScript, 'nickName') );
// call은 꼭 자기 조상의 메서드만 빌려쓸 수 있는 게 아님
// string이 array의 메서드를 사용할 수 있음
// Array.object.forEach.call('hello',() => {})


// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?


for (let key in javaScript) {

  if(Object.prototype.hasOwnProperty.call(javaScript,key)){

    // console.log(key);
  }

  // 위와 동일
  // if({}.hasOwnProperty.call(javaScript,key)){

  //   console.log(key);
  // }

}
// for in문을 그냥 쓰면 전역에서 훼손된 것까지 조회함
// for..in : 객체를 넣으면 객체의 key를 순환
// for (const variable in object) { statement; }

// enumerable : 열거가능한 


const obj = {}


obj.nickName = 'tiger'

Object.defineProperty(obj, 'age', {
  value: 30,
  enumerable: true,
  writable: false,
  configurable: true
})

// 고정 Object.freese(obj) => 해동 불가!

for (let key in javaScript) {
  if (Object.prototype.hasOwnProperty.call(javaScript, key)) {

    // console.log(javaScript[key]);
  }
}

// 점 표기법    => 변수 설정 x
// 대괄호 표기법 => 변수 설정 o

const tens = [10,100,1000,10_000]

for (let key in tens) {

  console.log(tens[key]);
}


// for...in은 객체에게 양보하자.
// 배열은 순서 보장이 안됨, 성능 ⇣


























