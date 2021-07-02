import * as React from "react"
import MarkdownHTML from '../components/markdown-html'


const AboutPageTempate = ({ title, html, content, children }) => (
  <>
    <h1>{ title }</h1>
    <MarkdownHTML html={html} content={content}
      classname='content' />
    { children }
  </>
)

export default AboutPageTempate

