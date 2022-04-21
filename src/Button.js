import { html } from 'htm/preact'

const Button = ({ text, goto }) => {
  return html`<button>${text}</button>`
}

export default Button