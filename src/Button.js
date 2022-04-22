import { html } from 'htm/preact'
import { AppStore } from './AppStore'

const Button = ({ text, goto }) => {
  const doGoto = () => {
    AppStore.update(s => {s.step = goto})
    location.hash = goto
  }

  return html`<button onclick=${doGoto}>${text}</button>`
}

export default Button