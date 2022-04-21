import { html } from 'htm/preact'
import Button from './button'

const Question = (props) => {
  var data = props.data

  return html`
    <div class="question">
      <p class="text">${data.question}</p>
      <div class="answers">
        ${data.answers.map(a => html`<${Button} text="${a.text}" goto="${a.goto}" />`)}
      </div>
    </div>
  `
}

export default Question