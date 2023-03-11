class btnReserved extends HTMLElement {
    static get observedAttributes() {
      return ["reverved"];
    }
  
    attributeChangedCallback(propName, oldValue, newValue) {
      this[propName] = newValue;
      this.mount();
    }
  
    connectedCallback() {
      this.mount();
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.onButtonClicked = this.onButtonClicked.bind(this);
    }
  
    mount() {
      this.render();
      this.addEventListeners();
    }
  
    addEventListeners() {
      this.shadowRoot
        .querySelector("button")
        .addEventListener("click", this.onButtonClicked);
    }
  
    render() {
      console.log("render");
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./src/components/button-reserved/btn-reserved.css">
          <section>
            <h1>reserved</h1>
            ${this.reserved || 'Si' }
            <button> reserve </button>
          </section>
      `;
    }
  
    removeEventListeners() {
      this.shadowRoot
        .querySelector("button")
        .removeEventListener("click", this.onButtonClicked);
    }
  
    onButtonClicked() {
      console.log("clicked");
      const currentValue = String(this.getAttribute("reserved")) || 'Si';
      this.setAttribute("reserved",'No');
    }
  }
  //se supone que en el shadowroot se cambia al momento de clickear, pasa de si a reserved: "no"
  customElements.define("btn-reserved", btnReserved);
  export default btnReserved;