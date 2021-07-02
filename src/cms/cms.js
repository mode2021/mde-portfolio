import CMS from 'netlify-cms-app'
//import styles from '!css-loader!sass-loader!../components/all.sass'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/blog-post-preview'

//CMS.registerPreviewStyle(styles.toString(), { raw: true })
CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
