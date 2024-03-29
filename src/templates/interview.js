import React from "react";
import PropTypes from "prop-types";
// import { kebabCase } from 'lodash'
// import Helmet from 'react-helmet'
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
// import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'


export default class Interview extends React.Component {
  render() {
    var featuredimage  = this.props.data.markdownRemark.frontmatter.featuredimage;
    var post = this.props.data.markdownRemark;
    
    return (
      <Layout>
        <section className="section">
          <div className="container content">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                  {this.props.data.markdownRemark.frontmatter.title}
                </h1>
                <p>Interviewer: {this.props.data.markdownRemark.frontmatter.interviewerName} </p>
                <p>Interviewee: {this.props.data.markdownRemark.frontmatter.intervieweeName} </p>
                <div className="content" dangerouslySetInnerHTML={{ __html: this.props.data.markdownRemark.html }} />
                {featuredimage ? <img src={featuredimage.childImageSharp.fluid.src } /> : ''}
                

              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query InterviewByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        interviewerName
        intervieweeName
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 120, quality: 100) {
              src
            }
          }
        }
      }
    }
  }
`;
