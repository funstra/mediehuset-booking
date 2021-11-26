import './components/drawer.js'
import './components/date.js'
import './components/menu.js'
import './components/listing.js'

window.appContext = 'CLOSED'


window.__host = e => e.target.getRootNode().host
window.__callHost = (e, f, ...args) => window.__host(e)[f](e, args)

const listing = document.querySelector('app-listing')
window.addEventListener('menu-context', e => {
    console.log(e.detail.context)
    listing.setAttribute('context', e.detail.context || "")
})