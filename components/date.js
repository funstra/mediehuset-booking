customElements.define('app-date',
    class appDate extends HTMLElement {
        static get observedAttributes() { return []; }
        constructor() {
            super()
            this.attachShadow({ mode: 'open' })
            const style = document.createElement('style')
            this.shadowRoot.appendChild(style)
            style.textContent = `
            *{
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                font-family: monospace;
            }
            span{
                display: inline-block;
                vertical-align: middle;
            }
            `
            this.shadowRoot.innerHTML += `
            <input type="date" id="start" name="trip-start"
                   value="2018-07-22"
                   min="2018-01-01" max="2018-12-31">
            
            `
        }
        connectedCallback() { }
        diconnectedCallback() { }
        attributeChangedCallback(name, oldValue, newValue) { 
        
        }
    })