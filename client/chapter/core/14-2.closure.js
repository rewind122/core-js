

function earth(){

  let water = true;
  let gravity = true;

  return () => [water, gravity];

  // 내보낼 함수는 꼭 이름이 있어야 하는 게 아님(익명함수여도 ok)
}



const ufo = earth();




const button = document.querySelector('button');

/* normal function */
// function handleClick(){

//   let isClicked = false;

//   function inner() {
//     if(!isClicked){

//       document.body.style.background = 'orange'
//     }else{

//       document.body.style.background = 'white'
//     }

//     isClicked = !isClicked;
//   }

//   return inner;
// }

// IIFE
/* arrow function */
const handleClick = (() => {
  let isClicked = false;

  return () => {
    if (!isClicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = 'white';
    }

    isClicked = !isClicked;
  };
})();

button.addEventListener('click', handleClick);



function useState(init){
  let value = init;

  function read(){
    return value;
  }

  function write(newValue){
    value = newValue;
  }

  return [read, write];
}

const [getNumber, setNumber] = useState(10);

// const getter = result[0];
// const setter = result[1];






















