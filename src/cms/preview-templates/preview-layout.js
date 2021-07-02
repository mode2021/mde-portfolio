import * as React from 'react'
import '../../components/all.sass'

const PreviewLayout = ({ children }) => (
  <prevlayout>

    <section className='container is-max-desktop'>

      { children }

    </section>

  </prevlayout>
)


export default PreviewLayout

