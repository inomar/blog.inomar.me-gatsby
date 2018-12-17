import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Card from '../components/Card'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="uk-container uk-container-small">
            {posts
              .map(({ node: post }) => (
                <Link className="button is-small" to={post.fields.slug} key={post.id}>
                <Card
                  title={post.frontmatter.title}
                  slug={post.fields.slug}
                  excerpt={post.excerpt}
                  date={post.frontmatter.date}
                  tags={post.frontmatter.tags}
                />
                </Link>
              ))}
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            tags
            templateKey
            date(formatString: "YYYY.MM.DD")
          }
        }
      }
    }
  }
`
