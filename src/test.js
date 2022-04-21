import { html } from 'htm/preact'

const Test = (props) => {
  return html`
    <h1>Testing one two three!</h1>
    <p>Always drink your ${props.drink}!</p>
    `
}

export default Test