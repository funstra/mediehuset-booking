customElements.define('app-menu',
    class appMenu extends HTMLElement {
        static get observedAttributes() { return []; }
        constructor() {
            super()
            this.attachShadow({ mode: 'open' })
            const style = document.createElement('style')
            this.shadowRoot.appendChild(style)
            style.textContent = `
            :host{
                    flex-basis: 0;
                    flex-grow: 1;
                    gap: 2ch;
                    max-width: 128px;
                    display: flex;
                    justify-content: space-between;
            }
            img {
                height: 100%;
                display: block;
            }
            `
            this.shadowRoot.innerHTML += `
            <img width="24px" src="./assets/user.svg" type="user"></img>
            <img width="24px" src="./assets/filter.svg" type="filter"></img>
            <img width="24px" src="./assets/book.svg" type="book"></img>
            `

        }
        connectedCallback() {
            this.shadowRoot.addEventListener('click', e => {
                this.dispatchEvent(new CustomEvent(`menu-context`, {
                    bubbles: true,
                    composed: true,
                    detail: {
                        context: e.target.getAttribute('type')
                    }
                }))
            })
        }
        diconnectedCallback() { }
        attributeChangedCallback(name, oldValue, newValue) {

        }
    })