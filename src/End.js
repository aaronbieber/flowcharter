import { html, h } from 'htm/preact'
import { Parser, HtmlRenderer } from 'commonmark'
import { Interweave } from 'interweave'

const End = (props) => {
  var reader = new Parser()
  var writer = new HtmlRenderer()
  
  return html`
    <div class="question">
      <h3>${props.data.title}</h3>
      <${Interweave} content=${writer.render(reader.parse(props.data.text))} />
    </div>
  `
}

export default End