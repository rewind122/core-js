/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.



// 1. 객체의 상속
// 2. 생성자 함수의 상속
// 3. 생성자 함수 모던 방식 class


class Animal {
  legs = 4;
  tail = true;
  // 값을 변경하지 않을 거라면 class field로 빼서 쓴다?
  // 모던 자바스크립트 인포를 읽어볼 것!!

  constructor(name){
    this.name = name;
    this.stomach = [];
  }

  get eat(){
    return this.stomach
  }
  set eat(food){
    this.stomach.push(food)
  }
}

const a = new Animal('포동이');

class Tiger extends Animal {

  // static을 넣으면 데이터를 저장할 수 있다?
  // 언제든지 불러올 수 있는 보호가 된(밖에서 접근할 수 없는) 데이터?
  // 내부에서 접근은 되지만 덮어쓰기가 안 된다?
  static options = {
    version: '1.0.0',
    company: '8b-studio',
    ceo: '심선범'
  }

  constructor(name){
    super(name);   // 부모의 constructor 호출
    this.pattern = '호랑이무늬';
  }

  // static 이 없으면 인스턴트 메서드
  static bark(sound){
    return sound + '🐯'
  }   // 스테틱 메서드

  hunt(target){
    return `${target}에게 조용히 접근한다.`
  }
}


const 호랑이 = new Tiger('호돌이')





























