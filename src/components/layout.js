import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ children }) => (
  <main>
    <section>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </section>
    <section>
      { children }
    </section>
  </main>
)


export default Layout
