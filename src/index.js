import './style.scss'
import Data from './coaching.json'
import { render, html, Component } from 'htm/preact'
import Board from './Board'
import { AppStore } from './AppStore'

if (location.hash.length > 1) {
  var newStep = location.hash.substring(1)
  if (Object.keys(Data).includes(newStep)) {
    AppStore.update(s => { s.step = newStep })
  }
}

const App = html`<${Board} />`

render(App, document.body)