/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

// function isArray(data){
//   return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array';
// }

// isArray(data)  // true | false


// function typeOf(data) {
//   return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
// }


const people = [
  {
    id: 0,
    name: '안재명',
    age: 25,
    job: '물음표살인마',
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/50.jpg',
    imgAlt: '대체텍스트입니다.',
  },
  {
    id: 1,
    name: '황선우',
    age: 51,
    job: '요식업 사장님',
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
    imgAlt: '대체텍스트입니다.',
  },
  {
    id: 2,
    name: '유진',
    age: 12,
    job: '디스코드 봇',
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
    imgAlt: '대체텍스트입니다.',
  },
  {
    id: 3,
    name: '김한울',
    age: 39,
    job: '비둘기',
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/78.jpg',
    imgAlt: '대체텍스트입니다.',
  },
];



/* 요소 순환 ---------------------------- */

// forEach

people.forEach((u)=>{
  console.log( u.job );
});

// const first = document.querySelector('.first')
// const second = document.querySelector('.second')
// const third = document.querySelector('.third')


// first.addEventListener('click',()=>{
//   console.log('first를 클릭하셨습니다.');
// })
// second.addEventListener('click',()=>{
//   console.log('second를 클릭하셨습니다.');
// })
// third.addEventListener('click',()=>{
//   console.log('third 클릭하셨습니다.');
// })

const span = document.querySelectorAll('span');

span.forEach((tag)=>{
  tag.addEventListener('click',function(){
    this.style.color = 'dodgerblue'
  })
})

// event delegation (이벤트 위임)



/* 원형 파괴 ----------------------------- */
// 아주위험...

// push
// people.push('admin')

// pop
// people.pop()

// unshift
// shift
// reverse
const arr = [...people]
arr.reverse()

// splice
// push,pop,whift,unshift 통합업그레이드버전?
// people.splice(0,2,'안녕','잘가')

// sort
function compare({age:a},{age:b}){
  if(a > b) return 1;   // 첫 번째 값이 두 번째 값보다 큰 경우
  if(a < b) return -1;  // 첫 번째 값이 두 번째 값보다 작은 경우
  if(a == b) return 0;  // 두 값이 같은 경우
}

// people.sort(compare)

/* 새로운 배열 반환 ------------------------ */

// concat
// slice??
// toSorted
const toSorted = people.toSorted(compare);

// toReversed
// 뒤집어진 새로운 배열을 반환
const toReversed = people.toReversed();

// toSpliced
const toSpliced = people.toSpliced(0,2);

// map
// 해당 데이터에서 특정 부분만 추출하거나 특정 부분만 가공해서 다른 결과를 내보내고, 그 내보낸 결과가 배열이어야 할 떄 많이 씀 
// 이름만 담은 배열 반환
// const nameList = people.map((user) => {
//   return user.name;
// });
const nameList = people.map(user => user.name);

// 현재 나이에 + 2 배열 반환
// const age = people.map((user) => {
//   return user.age + 2;
// });
const age = people.map(u => u.age +2);


const nameTag = people.map(({name,age,job,imgSrc,imgAlt})=>{

  let template = /* html */ `
    <li class="userCard">
      <div class="imageField">
        <img src="${imgSrc}" alt="${imgAlt}" />
      </div>
      <ul class="contents">
        <li><span class="strong">이름</span> : ${name}</li>
        <li><span class="strong">나이</span> : ${age}</li>
        <li><span class="strong">직업</span> : ${job}</li>
      </ul>
    </li>
  `;

  return template;
})

const ul = document.querySelector('ul');
nameTag.forEach(tag => ul.insertAdjacentHTML('beforeend',tag))




/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
const 황 = people.find((item)=>{
  return item.name === '황선우'
})
// 여러개를 찾아주지 않음, 맨 위의 단일대상 반환
// 아이템이 뭐냐에 따라 반환하는 데이터타입이 달라짐

// findIndex
// 몇 번째에 있는지 찾아줌

/* 요소 걸러내기 --------------------------- */

// filter
const filter = people.filter((item)=>{
  return item.age > 20;
})

// console.log(...filter);
// filter는 조건에 부합하는 모든 요소 여러개를 반환
// 배열만 반환


/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce

// const reduce = people.reduce((acc,cur) => {
//   return acc + cur.age;
// }, 0)

// const reduce = people.reduce((acc,cur) => acc + cur.age, 0)

const template = people.reduce((acc,cur)=>{
  return acc + `<li class="userCard">${cur.name} : ${cur.age}</li>`
},'')

ul.insertAdjacentHTML('beforeend',template)


// reduceRight
// reduce와 순서 반대

/* string ←→ array 변환 ------------------ */

const str =  '유진 정민 현주 재명'

// split : 문자 ➡️ 배열

const stringToArray = str.split(' ');
console.log(stringToArray);

// join : 배열 ➡️ 문자
const arrayToString = stringToArray.join('/');
console.log(arrayToString);





const products = [
  { name: '냉동 만두', price: 10000, brand: '비비고' },
  { name: '냉동 피자', price: 15000, brand: '오뚜기' },
  { name: '냉동 치킨 너겟', price: 12000, brand: '하림' },
  { name: '냉동 감자튀김', price: 8000, brand: '맥케인' },
  { name: '냉동 새우', price: 18000, brand: '곰곰' },
];



// forEach 함수로 만들기

const forEach = (f, i) => {
  for(const a of i){
    f(a)
  }
}

forEach((item)=>{
  console.log();
},[1,2,3])



// map 함수로 만들기

const map = (f,i) => {
  let result = [];

  for(const a of i){
    result.push( f(a) )
  }

  return result;
}



// filter 함수로 만들기

const _filter = (f,i) => {
  let result = [];

  for(const a of i){
    if(f(a)) result.push(a)
  }

  return result;
}

_filter(n => n > 3, [1,2,3,4,5])


// reduce 함수로 만들기

const _reduce = (f,acc,i) => {

  if(!i){
    i = acc;
    acc = i.shift()
    // i = acc[Symbol.iterator]();
    // acc = i.next().value
  }
  
  for(const a of i){
    acc = f(acc, a);
  }

  return acc;
}

const add = (a,b) => a + b;

console.log(_reduce((t,p) => t + p.price, 0, products));



console.log(
  _reduce(
    add,
    map(
      (p) => p.price,
      _filter((p) => p.price < 10000, products)
    )
  )
);





