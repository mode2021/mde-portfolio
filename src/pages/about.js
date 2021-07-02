import * as React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import AboutPageTempate from '../templates/about-page'

const AboutPage = ({ data: { markdownRemark: { html, frontmatter: {title} } } }) => (
  <Layout>
    <AboutPageTempate
      title={ title }
      html={ html }
      />
  </Layout>
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
