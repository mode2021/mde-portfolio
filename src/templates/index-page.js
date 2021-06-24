import * as React from "react"
import MarkdownHTML from '../components/markdown-html'


const IndexPageTempate = ({ title, html, content, children }) => (
  <main>
    <h1>{ title }</h1>
    <MarkdownHTML html={html} content={content} />
    { children }
  </main>
)

export default IndexPageTempate
