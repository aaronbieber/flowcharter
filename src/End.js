import { html, h } from 'htm/preact'
import { Parser, HtmlRenderer } from 'commonmark'
import Button from './Button'

const End = (props) => {
  var reader = new Parser()
  var writer = new HtmlRenderer()
  var actions

  if (props.data.actions) {
    actions = html`
      ${props.data.actions
        .map(a => html`<${Button} class="button-yellow nav-button" text="${a.text}" goto="${a.goto}" />`)}
    `
  } else {
    actions = html`<${Button} class="button-yellow nav-button" text="Start over?" goto="1" />`
  }
  
  return html`
    <div class="question">
      <h3>${props.data.title}</h3>
      <div dangerouslySetInnerHTML=${{ __html: writer.render(reader.parse(props.data.text)) }} />
    </div>

    ${actions}
  `
}

export default End