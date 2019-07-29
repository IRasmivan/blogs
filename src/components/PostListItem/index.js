// import moment from 'moment'
import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import BlogNav from '../shared/BlogNav'
import BlogContent from '../shared/BlogContent'

import './PostListItem.css'

class PostListItem extends Component {
  render() {
    // const { datePublished, title, subtitle, slug } = this.props

    return (
      <div className="box">
        <BlogContent limit={11} {...this.props}>
          <BlogNav
            date={this.props.date}
            to={{
              pathname: `/blog/${this.props.path}`,
              state: `${this.props}`
            }}
            status={this.props.status}
            textread="Read More"
          />
        </BlogContent>
      </div>
    )

    // return (
    //   <div className="post-list-item">
    //     <h1 className="title is-4">
    //       <Link to={`/blog/${slug}`}>
    //         {title}
    //       </Link>
    //     </h1>
    //     <h2 className="subtitle is-5">
    //       {subtitle}
    //     </h2>
    //     <span>
    //       {moment(datePublished).format('MMMM D, YYYY')}
    //     </span>
    //   </div>
    // )
  }
}

export default PostListItem
