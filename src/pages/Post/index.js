import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import moment from "moment";
import { getPostBySlug } from "../../lib/contentful";

import Layout from "../../components/Layout";

import { TitleComponent } from "../../components/shared/TitleComponent";

import "./Post.css";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      subtitle: "",
      content: "",
      slug: "",
      datePublished: "",
      isLoading: true
    };
  }

  componentDidMount() {
    const { slug } = this.props.match.params;
    getPostBySlug(slug).then(response => {
      console.log(response);
      const post = response.items[0].fields;

      this.setState({ ...post, isLoading: false });

      // After the post is loaded, we need to re-call Prism's highlight method to get
      // syntax highlighting to fire properly
      window.Prism.highlightAll();
    });
  }

  render() {
    if (this.state.isLoading) {
      // TODO: Spinner
      return (
        <Layout>
          <div />
        </Layout>
      );
    }

    const { title, subtitle, content, date } = this.state;
    console.log(this.state);
    return (
      <Layout>
        <TitleComponent title={title} />
        <div className="container">
          <div className="columns is-mobile">
            <div className="column is-8 is-offset-2">
              <div className="container" class="has-margin-top-1">
                <h1 className="title is-2">{title}</h1>
                <h2 className="subtitle is-4">{subtitle}</h2>
                <h3 className="subtitle is-6">
                  {moment(date).format("MMMM D, YYYY")}
                </h3>
              </div>
              <div style={{ marginTop: "50px" }}>
                <ReactMarkdown
                  source={content}
                  className="content is-medium post-body"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Post;
