const template = document.createElement('template');
template.innerHTML = `
<style>
  .ds-button {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;    
    
    & button {
        padding: 3px;
        border: none;
        transition: all 0.2s ease-in-out;
        
        &:hover {
            cursor: pointer;
            filter: revert;
        }
    }
  }
</style>

<div class="ds-button">
  <button><slot></slot></button>
</div>`;

export class DSButton extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('button').style = `
            background-color: ${this.getAttribute('color')};
            border-radius: ${this.getAttribute('rounded')}px;
            width: ${this.getAttribute('width')}px;
            height: ${this.getAttribute('height')}px;
            color: ${this.getAttribute('text-color')};
        `;
    }

    connectedCallback(){
        this.button = this.getAttribute("@")
        this.render();
    }

    render(){
        this.button;
    }
}
