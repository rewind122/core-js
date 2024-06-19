function getAttr(node, prop) {
  if (isString(node)) node = getNode(node);

  if (!isString(prop)) throw new TypeError('getAttr 함수의 두 번째 인수는 문자 타입이어야 합니다.');

  return node.getAttribute(prop);
}


function setAttr(node, prop, value) {
  if (isString(node)) node = getNode(node);

  if (!isString(prop)) throw new TypeError('setAttr 함수의 두 번째 인수는 문자 타입이어야 합니다.');

  if (value === '') return node.removeAttribute(prop);

  if (!value) throw new ReferenceError('setAttr 함수의 세 번째 인수는 필수 입력값입니다.'); // 순서 중요
  // 네 번째 조건문이 세 번째 조건문 위로 올라가면 removeAttribute는 동작 안 함

  // prop에 data가 있어? 그럼 dataset으로 넣기
  if(prop.startWith('data')){
    prop = prop.slice(5)
    node.dataset[prop] = value;
    return;
  }

  node.setAttribute(prop, value);
}


// function attr(node, prop, value){

//   if(!value){
//     return getAttr(node, prop);
//   }
//   else{
//     setAttr(node,prop,value)
//   }

// }

const attr = (node, prop, value) => (!value ? getAttr(node, prop) : setAttr(node, prop, value));
