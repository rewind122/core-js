class Button extends HTMLElement {
  constructor(){
    super();

    // c-button의 쉐도우 돔을 열어줘.
    // 캡슐화하려면 닫아줘야함
    // 닫은 상태면 내부에서만 접근 가능
    this.attachShadow({ mode: 'open' });
    // this.attachShadow({ mode: 'closed' });

    
    // 그리고 그 안에(shadowRoot) 내가 원하는 태그 집어넣을거야.
    this.shadowRoot.innerHTML = /* html */ `
      <button>hello</button>
    `   // open 상태일 때
    // shadow.innerHTML = /* html */ `
    //   <button>hello</button>
    // `   // closed 상태일 때
  }

  connectedCallback(){

  }

  disconnectedCallback(){

  }
}

customElements.define('c-button', Button);

document.querySelector('c-button').shadowRoot.querySelector('button')
