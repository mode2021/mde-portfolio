import * as React from 'react'
import MarkdownHTML from './markdown-html'

const CardImgTxt = ({
  src,
  alt,
  html,
  content
}) => (
   <div className='box feature-box'>
      <div className='columns is-vcentered is-gapless'>
        <div className='column is-half'>
          <figure className='a'>
            <img src={src} alt={alt}
            />
          </figure>
        </div>

        <div className='column is-half'>
          <span className='has-text-centered'>
            <MarkdownHTML html={html} content={content}
              classname='content'
              />
          </span>
        </div>
      </div>
  </div>
)

export default CardImgTxt
