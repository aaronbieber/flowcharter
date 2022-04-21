import { html } from 'htm/preact'
import Question from './question'
import Data from './coaching.json'

const Board = (props) => {
  return html`
    <${Question} data=${Data["1"]} />
  `
}

export default Board