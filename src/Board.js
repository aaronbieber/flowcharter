import { html } from 'htm/preact'
import Question from './Question'
import Data from './coaching.json'
import { AppStore } from './AppStore'
import End from './End'

const Board = (props) => {
  const step = AppStore.useState(s => s.step)
  let element

  if ("end" in Data[step]) {
    element = html`<${End} data=${Data[step].end} />`
  } else {
    element = html`<${Question} data=${Data[step]} />`
  }

  return element
}

export default Board