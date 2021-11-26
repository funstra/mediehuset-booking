const curentDate = new Date()
const yyymmdd = curentDate.toISOString().split('T')[0]
const maxDate = new Date(curentDate.setDate(curentDate.getDate() + 60))
const MAXyyymmdd = maxDate.toISOString().split('T')[0]
console.log(curentDate == maxDate)
const template = document.createElement('template')
template.innerHTML = String.raw`
<style>
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
</style>

<input type="date" value="${yyymmdd}" min="${yyymmdd}" max="${MAXyyymmdd}">
`
customElements.define('app-date',
    class appDate extends HTMLElement {
        static get observedAttributes() { return []; }
        constructor() {
            super()
            this.attachShadow({ mode: 'open' })
            this.shadowRoot.appendChild(template.content.cloneNode(true))
        }
        connectedCallback() { }
        diconnectedCallback() { }
        attributeChangedCallback(name, oldValue, newValue) {

        }
    })