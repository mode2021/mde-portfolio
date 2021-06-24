import * as React from "react"
import Layout from '../components/layout'
import MarkdownHTML from '../components/markdown-html'


const AboutPageTempate = ({ title, html, content, children }) => (
  <Layout>
    <h1>{ title }</h1>
    <MarkdownHTML html={html} content={content} />
    { children }
  </Layout>
)

export default AboutPageTempate

