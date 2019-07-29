import React, { Component } from 'react'

import Layout from '../../components/Layout'
import PostList from '../../components/PostList'

import './Blog.css'
import AdSense from 'react-adsense'

import AdBanner from '../../components/Adv/AdBanner'

class Blog extends Component {
  render() {
    return (
      <Layout>
        <div className="hero blog-hero" style={{ marginTop: '2em' }}>
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-2">Blog Posts</h1>
              <h2 className="subtitle">Technical content</h2>
              <AdBanner />
            </div>
          </div>
        </div>
        <PostList />
      </Layout>
    )
  }
}

export default Blog
