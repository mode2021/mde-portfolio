import * as React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link className='navbar-item' to='/'>
          MDe
        </Link>

        <div
          role='button' className='navbar-burger' aria-label='menu'
          aria-expanded='false' data-target='myNav'
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div id="myMenu" className="navbar-menu">
        <div className="navbar-start">

          <Link className="navbar-item" to='/work'>Work</Link>
          <Link className="navbar-item" to='/publications'>Publications</Link>
          <Link className="navbar-item" to='/blog'>Blog</Link>
          <Link className="navbar-item" to='/about'>About</Link>

        </div>
      </div>

    </nav>
)


export default Navbar
