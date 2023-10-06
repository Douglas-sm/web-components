/** Cards */
import { DSCard } from "./components/cards/ds-card.js";

/** Buttons */
import { DSButton } from "./components/buttons/ds-button.js";

/** Register components */
window.customElements.define('ds-card', DSCard);
window.customElements.define('ds-button', DSButton);

/* Inserir diretamente por JS
const html  = `<ds-card
    name="Douglas Senta Mor"
    avatar="person.jpg"
    align="left"
>
</ds-card>`;
document.querySelector('body').insertAdjacentHTML('beforeend', html);
*/
