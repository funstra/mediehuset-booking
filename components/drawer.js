customElements.define('app-drawer',
    class appDrawer extends HTMLElement {
        static get observedAttributes() { return ['open']; }
        constructor() {
            super()
            this.attachShadow({ mode: 'open' })
            const style = document.createElement('style')
            this.shadowRoot.appendChild(style)
            style.textContent = `
            *{
                box-sizing: border-box;
                padding: 0;
                margin: 0;
            }
            :host{
                padding-block: var(--size-1) !important;
                background-color: #ccc;
                font-family: monospace;
            }
            .inner{
                padding-inline: var(--size-1);
            }
            .row-0{
                display: flex;
                justify-content: space-between;
            }
            .date{
                display: flex;
                align-items: center;
            }

            `
            this.shadowRoot.innerHTML += `
            <div class="inner">
                <div class="row-0">
                    <div class="date">
                        <app-date></app-date>
                    </div>
                    <app-menu></app-menu>
                </div>
                <app-context></app-context>
            </div>
            `

        }
        height(h) {
            this.style.height = h
        }
        set open(s) {
            this.height(s == 'true' ? '50%' : '10%')
        }
        get open() {
            return this.getAttribute('open')
        }
        connectedCallback() {
            this.shadowRoot.addEventListener('menu-context', e => {
                if (window.appContext === 'CLOSED') {
                    this.setAttribute('open', 'true')
                    console.log(e.detail.context)
                    window.appContext = e.detail.context
                } else if (window.appContext === e.detail.context) {
                    this.setAttribute('open', 'false')
                    window.appContext = 'CLOSED'
                    e.stopPropagation()
                    this.dispatchEvent(new CustomEvent('menu-context',{
                        bubbles: true,
                        composed: true,
                        detail: {
                            context: '',
                        }
                    }))
                } else {
                    window.appContext = e.detail.context
                }
            })
        }
        diconnectedCallback() { }
        attributeChangedCallback(name, oldValue, newValue) {
            this[name] = newValue
        }
    })