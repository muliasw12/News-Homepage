import React from 'react'
import Article from '../../components/Content/Content';
import { blog01, blog02, blog03 } from './imports';
import './blog.css'

const Blog = () => {
  return (
    <div className="news__blog section__padding">
      <div className="news__blog-container_group">
        <Article no="01" imgUrl={blog01} title="Reviving Updates Retro PCs" text="What happens when old PCs are given modern upgrades?"/>
        <Article no="02" imgUrl={blog02} title="Top 10 Laptop of 2022" text="Our best picks for various needs and budgets."/>
        <Article no="03" imgUrl={blog03} title="The Growth of Gaming" text="How the pandemic has sparked fresh opportunities."/>
      </div>
    </div>
  )
}

export default Blog
