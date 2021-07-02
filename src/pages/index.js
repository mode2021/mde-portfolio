import * as React from "react"
import { graphql } from 'gatsby'

import IndexPageTemplate from '../templates/index-page'
import Navbar from '../components/navbar'
import '../components/all.sass'

const IndexPage = ({ data: { markdownRemark: { html, frontmatter: {f_img, f_img_alt} } } }) => (
  <index>

    <section className='container is-max-desktop'>
      <Navbar />
    </section>

    <section className='hero is-fullheight-with-navbar'>
      <div className='hero-body'>
        <IndexPageTemplate
          f_img={f_img}
          f_img_alt={f_img_alt}
          html={html}
        />
      </div>
    </section>

  </index>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: {pageKey: {eq: "index"}}) {
      html
      frontmatter {
        f_img
        f_img_alt
      }
    }
  }
`
 
