const template = document.createElement('template');
template.innerHTML = `
<style>
  .d-card {
    border: 1px solid red;
    font-family: sans-serif;
    background: #f4f6f7;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 10px;
  }

</style>
<div class="d-card">
  <img/>
  <div>
    <h3></h3>
    <div class="details">
      <p><slot name="id"/></p>
      <p><slot name="job title"/></p>
      <p><slot name="email"/></p>
      <p><slot name="phone"/></p>
    </div>
  </div>
</div>`;

export class DSCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
        this.shadowRoot.querySelector('.d-card').style = `text-align: ${this.getAttribute('align')}`
    }

    connectedCallback(){
        this.h3 = this.getAttribute("name")
        this.render();
    }

    render(){
        this.h3;
    }
}
