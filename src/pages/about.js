import * as React from "react"
import { graphql } from 'gatsby'
import AboutPageTempate from '../templates/about-page'

const AboutPage = ({ data: { markdownRemark: { html, frontmatter: {title} } } }) => (
  <AboutPageTempate
    title={ title }
    html={ html }
  >
    <p> more bla bla bla...</p>
  </AboutPageTempate>
)

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: {pageKey: {eq: "about"}}) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default AboutPage
