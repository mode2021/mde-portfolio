import * as React from 'react'
import Navbar from './navbar'
import './all.sass'

const Layout = ({ children }) => (
  <layout>

    <section className='container is-max-desktop'>

      <Navbar />

      { children }

    </section>

  </layout>
)


export default Layout
