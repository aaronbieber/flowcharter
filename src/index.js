//const data = require('../data/coaching.json')
import { render, html, Component } from 'htm/preact'
import Board from './board'

const App = html`<${Board} />`

render(App, document.body)