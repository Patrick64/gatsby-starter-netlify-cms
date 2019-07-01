import React from 'react'
import PropTypes from 'prop-types'
// import { kebabCase } from 'lodash'
// import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
// import Content, { HTMLContent } from '../components/Content'



export default class Interview extends React.Component {
  render()  {
    return (
      <Layout>
        
          <h1>{this.props.data.markdownRemark.frontmatter.title}</h1>
        
      </Layout>
    ) 
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
      }
    }
  }
`
