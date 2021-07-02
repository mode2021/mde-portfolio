import * as React from 'react'

import Layout from '../components/layout'
import BlogRoll from '../components/blog-roll'

export default function BlogIndexPage() {
  return (
    <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1585683936597-63d313c21a87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest Stories
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
    </Layout>
  )
}
