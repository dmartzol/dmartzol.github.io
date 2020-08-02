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
      <h1>Hey there!</h1>
      <h3>I'm Daniel Martinez. I love learning new stuff and I put together this simple website to show the projects I worked on.</h3>
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