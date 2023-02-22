import React from 'react'
import './postWidget.css'

const PostWidget = () => {
  return (
    <div className="news__postWidget">
      <h1>New</h1>
      <div className="news__postWidget-content">
        <div className="news__postWidget-content__first">
            <h2>Hydrogren VS Electirc Cars</h2>
            <p>
                Will hydrogen-fueled cars ever catch up to EVs?
            </p>
            <div class="line-1"></div>
        </div>
        <div className="news__postWidget-content__second">
            <h2>The Downsides of AI Artistry</h2>
            <p>
                What are the possible adverse effects of on-demand 
                AI image generation?
            </p>
            <div class="line-2"></div>
        </div>
        <div className="news__postWidget-content__third">
            <h2>Is VC Funding Drying Up?</h2>
            <p>
                Private funding by VC firms is down 50%
                YOY. We take a look at what that means.
            </p>
        </div>
      </div>
    </div>
  )
}

export default PostWidget
