import * as React from "react"
import IndexPageTempate from '../templates/index-page'
import { Link, graphql } from 'gatsby'

const IndexPage = ({ data: { markdownRemark: { html, frontmatter: {title} } } }) => (
  <IndexPageTempate
    title={ title }
    html={ html }
  >
    <div>
      <ul>
        <Link to='/about'>About</Link>
      </ul>
    </div>
  </IndexPageTempate>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: {pageKey: {eq: "index"}}) {
      html
      frontmatter {
        title
      }
    }
  }
`
