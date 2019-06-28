import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const InterviewTemplate = ({
  // content,
  contentComponent,
  title,
  // featuredimage,
  // date,
  // interviewerName,
  // intervieweeName,
  // transcription,
  // featuredpost,
  // subjects,
  // description,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <PostContent content={transcription} />
          </div>
        </div>
      </div>
    </section>
  )
}

InterviewTemplate.propTypes = {
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const Interview = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <InterviewTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Interview">
            <title>{`${post.frontmatter.title}`}</title>
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

Interview.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Interview

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
