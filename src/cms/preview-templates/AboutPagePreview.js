import * as React from "react"
import PreviewLayout from './preview-layout'
import AboutPageTemplate from '../../templates/about-page'


const AboutPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <PreviewLayout>
        <AboutPageTemplate
          title={data.title}
          subtitle={data.subtitle}
          content={widgetFor('body')}
        />
      </PreviewLayout>
    )
  }
  else {
    return <div>Loading...</div>
  }
}

export default AboutPagePreview

