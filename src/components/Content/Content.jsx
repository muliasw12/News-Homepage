import React from 'react'
import './content.css';

const Content = ({ imgUrl, no, title, text }) => {
  return (
    <div className="news__content-container">
      <div className="news__content-container_image">
        <img src={imgUrl} alt="blog_image"/>
      </div>
      <div className="news__content-container_article">
        <h2>{no}</h2>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Content
