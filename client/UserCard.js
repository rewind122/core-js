class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <button type="button">btn</button>
    `;
    this.button = this.shadowRoot.querySelector('button');
  }

  connectedCallback() {
    this.button.addEventListener('click', () => this.clickMe());
    // arrow function은 자체적으로 this 를 가지지 않기 때문에 부모의 this를 가져옴
    // this.button.addEventListener('click', this.clickMe.bind(this));
    // bind -> 함수를 실행하지 않고 this 전달
  }

  clickMe() {
    console.log(this);
  }
}

customElements.define('user-card', UserCard);

// console.log( document.querySelector('user-card').shadowRoot.querySelector('button') );

// function sum(){
//   console.log(this);
// }

// sum() // undefined
// sum.call({}) // {} => 실행
// sum.apply({}) // {} => 실행
// const n = sum.bind({}) // {} => 실행 x

// n()
