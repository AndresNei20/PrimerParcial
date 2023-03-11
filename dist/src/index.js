import * as components from "./components/index.js"
class Appcontainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <journey-card></journey-card>
        `
    };
}
customElements.define('app-container', Appcontainer)