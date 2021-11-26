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
    :host{
        display: flex;
    }
    input[type="date"]{  
        border: none;
        background: transparent;
    }
    .inner{
        display: flex;
    }
    .date-picker{
        display:flex;
        gap: 2ch;
    }
    .date-picker div{
        position: relative;
        /* background-color: red; */
    }
    .date-picker div label{
        font-size: var(--size-1);
    }
    .date-picker div input{
        position: absolute;
        opacity: 0;
    }
    
</style>
<div class="date-picker">
    <div>
        <label for="start-date">
            <span>d</span>
            <span>m</span>
        </label>
        <input id="start-date" type="date" value="${yyymmdd}" min="${yyymmdd}" max="${MAXyyymmdd}">
    </div>
    <div>
    →
    </div>
    <div>
        <label for="end-date">
            <span>d</span>
            <span>m</span>
        </label>
        <input id="end-date" type="date" value="${yyymmdd}" min="${yyymmdd}" max="${MAXyyymmdd}">
    </div>
</div>
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