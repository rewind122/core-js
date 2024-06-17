/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우




// 객체의 프로토타입 [[Prototype]] => __proto__

const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  set eat(food){   // setter function
    this.stomach.push(food);
  },
  get eat(){   // getter function
    return this.stomach;
  }
  // getter,setter function => 객체 메소드, enumerble false로 들어감
  // 객체의 프로퍼티처럼 사용
}

// 상속의 getter와 setter function => 우선순위를 상위로 올림(브라우저마다 다름)
const tiger = {
  pattern: '호랑이무늬',
  hunt(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  },
  __proto__: animal
};

const 백두산호랑이 = {
  color: 'white',
  name: '백돌이',
  __proto__: tiger
};



/* animal.eat  // getter
animal.eat = '고기'  // setter */
// animal.setEat('고기')


// 생성자 함수(객체 대량 생산?)
// 함수의 두가지 얼굴... 앞선 내용 찾아보기


function Animal(){
  this.legs = 4;
  this.tail = true;
  this.stomach = [];
  this.getEat = function (){
    return this.stomach
  }
  this.setEat = function (food){
    this.stomach.push(food)
  }
}

const a1 = new Animal();


function Tiger(name){
  Animal.call(this)
  this.name = name;
  this.pattern = '호랑이무늬';
  this.hunt = function(target){
    return `${target}에게 조용히 접근한다.`;
  }
}

Tiger.bark = function(sound){
  return sound;
}

// 프로토타입에는 생성된 객체를 넣어줘야함
// Tiger.prototype = a1
// Tiger.prototype = new Animal 도 가능!

const 금강산호랑이 = new Tiger('금순이');




/* 함수의 메서드 (함수의 능력) */
// call   , , ,
// apply [ , , ]

// bind  즉시실행 x, 다른 데 받아서 쓸 때? 인자는 call처럼 넣음

// throttle, debounce


const arr = [1,2,3,4];

function sum(a,b,c){
  // console.log(this);
  return  a + b + c
}

/* 
sum.call('hello',1,2,3) // this를 전달함 인수를 개별로 받음 => 함수 실행 o
sum.apply('hello',1,2,3) // this를 전달함 인수를 배열로 받음 => 함수 실행 o

const b = sum.bind('hello',1,2,3); // this를 전달함 인수를 개별로 받음 => 함수 실행 안함 
 */
// call에 의해 실행한 것만 this가 바뀜
// call의 제일 첫번째 인수는 thisArg
// 함수의 인자는 this 뒤에 콤마(,)를 찍고 이어 써줌
// call은 함수 호출할때 this 값을 명시적으로 설정하고 싶을 때 사용



const user = {
  sayHi(){

    function sayBye(){
      console.log(this);
    }
    sayBye.call(this)
  }
}
// this를 동적으로 변경할 수 있는 게 call


// apply => call과 똑같음, 인자를 배열로 보냄




// 인스턴스 메서드 <- 어떤 생성자함수로 만든 인스턴스가 사용하는 함수
// 스태틱 메서드 <- 어떤 생성자함수랑 관련된 기능을 그 생성자함수에 묶어놓은 부가기능?같은 함수




























