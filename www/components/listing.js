const template = document.createElement('template')
template.innerHTML = String.raw`
    <style>
        :host{
            opacity: 0;
            transition: opacity 125ms;
        }
        img{
            width: 100%;
            display: block;
            max-height: 64px;
        }
    </style>
    <p>context: <span> </span> </p>
    <img src="" hidden>
`

customElements.define('app-listing',
    class appListing extends HTMLElement {
        static get observedAttributes() { return ['context']; }
        constructor() {
            super()
            this.attachShadow({ mode: 'open' })
            this.shadowRoot.appendChild(template.content.cloneNode(true))
        }
        connectedCallback() {
        }
        diconnectedCallback() { }
        attributeChangedCallback(name, oldValue, newValue) {
            switch (name) {
                case 'context':
                    this.shadowRoot.querySelector('p span').textContent = newValue
                    this.shadowRoot.querySelector('img').src = newValue ? `./assets/${newValue}.svg` : ''
                    if(newValue != ""){
                        this.style.opacity = 1
                    }else{
                        this.style.opacity = 0

                    }
            }
        }
    })