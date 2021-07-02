import * as React from "react"
import CardImgTxt from '../components/card-img-txt'


const IndexPageTemplate = ({
    f_img, f_img_alt, html, content,
    //title,
    children
  }) => (
  <>
    <CardImgTxt
      src={f_img}
      alt={f_img_alt}
      html={html}
      content={content}
    />
    { children }
  </>
)

export default IndexPageTemplate
