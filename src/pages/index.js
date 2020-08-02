import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import indexStyles from './index.module.scss'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
  `)

  return (
    <Layout>
      <h1>Hi.</h1>
      <h2>I'm Daniel Martinez</h2>
      <ol className={indexStyles.posts}>
        {
          data.allMarkdownRemark.edges.map((edge) => {
            return (
              <li className={indexStyles.post}>
                <Link to={`/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.date}</p>
                </Link>
              </li>
            )
          })
        }
      </ol>
    </Layout>
  )
}

export default IndexPage