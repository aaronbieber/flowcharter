import { html } from 'htm/preact'
import Button from './Button'

const Question = (props) => {
  var data = props.data

  return html`
    <div class="question">
      <p class="text">${data.question}</p>
      <div class="answers">
        ${data.answers.map(a => html`<${Button} class="button-yellow" text="${a.text}" goto="${a.goto}" />`)}
      </div>
    </div>
  `
}

export default Question