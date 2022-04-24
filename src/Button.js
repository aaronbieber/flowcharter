import { html } from 'htm/preact'
import { AppStore } from './AppStore'

const Button = (props) => {
  const prev = AppStore.useState(s => s.prev)
  const nav = (goto) => {
    AppStore.update(s => { s.prev = s.step; s.step = goto })
  }

  const doGoto = () => {
    const urlPattern = /^https/
    if (urlPattern.test(props.goto)) {
      window.parent.location = props.goto
    } else {
      if (props.goto < 1) {
        nav(prev)
        location.hash = prev
      } else {
        nav(props.goto)
        location.hash = props.goto
      }
    }
  }

  return html`<button class="${props.class}" onclick=${doGoto}>${props.text}</button>`
}

export default Button