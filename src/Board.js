import { html } from 'htm/preact'
import Question from './Question'
import Data from './coaching'
import { AppStore } from './AppStore'
import End from './End'
import Button from './Button'

const Board = (props) => {
  const step = AppStore.useState(s => s.step)
  const prev = AppStore.useState(s => s.prev)
  console.log('on step ' + step)
  console.log('prev ' + prev)
  let element, backButton

  if (step > 1) {
    backButton = html`<${Button} class="button-white margin-bottom" goto="-1" text="Go back" />`
  }

  if ("end" in Data[step]) {
    element = html`<${End} data=${Data[step].end} />`
  } else {
    element = html`<${Question} data=${Data[step]} />`
  }

  return html`
    <div id="container">
      ${backButton}
      ${element}
    </div>
  `
  
}

export default Board