import * as React from "react"
import IndexPageTemplate from '../../templates/index-page'


const IndexPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <section className='hero is-fullheight'>
        <div className='hero-body'>
          <IndexPageTemplate
            f_img={data.f_img}
            f_img_alt={data.f_img_alt}
            content={widgetFor('body')}
          />
        </div>
      </section>
    )
  }
  else {
    return <div>Loading...</div>
  }
}

export default IndexPagePreview
