import React from 'react'
import './header.css'
import webBackground from '../../assets/images/image-web-3-desktop.jpg';
import mobileBackground from '../../assets/images/image-web-3-mobile.jpg';


const Header = () => {
  return (
    <div className="news__header section_padding">
      <div className="news__header-content_image">
        <img src={webBackground} alt="webBackground"/>
      </div>
      <div className="news__header-content_text">
        <h1>The Bright Future of Web 3.0?</h1>
        <p>
           We dive into the next evolution of the web that
           claims to put the power of the platforms back into
           the hands of the people. But it is really fulfilling
           it's promise?
        </p>
      </div>
      <div className="news__header-button">
            <button>READ MORE</button>
      </div>
      <div className="news__header_mobile">
        <div className="news__header-content_image_mobile">
          <img src={mobileBackground} alt="mobileBackground"/>
        </div>
      </div>
    </div>
  )
}

export default Header
