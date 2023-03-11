import data from "./data.js"
import btnReserved from "../button-reserved/btn-reserved.js";
class journeyCard extends HTMLElement{
    static get observedAttributes(){
        return["destino","duracion", "costo", "descripcion", "actividades"]
    }

    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }

    render(){
        let contentCards = "";

        data.forEach((data)=>{
            contentCards += `<section id="card" class="card">
            <h2>${data.destino}</h2>
            <h4>${data.duracionEnDias}</h4>
            <h4>${data.costo} COL</h4>
            <h4>${data.descripcion}</h4>
            <h5>${data.actividades}</h4>
            <btn-reserved></btn-reserved>

            </section>`
        })

        this.shadowRoot.innerHTML += `
        <link rel="stylesheet" href="./src/components/journey-card/journey-card.css">
        <figure id="container" class="container">
        ${contentCards}
        </figure>
        `
    }
}
customElements.define('journey-card', journeyCard);
export default journeyCard;