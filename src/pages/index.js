import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import indexStyles from './index.module.scss'
import Img from 'gatsby-image'


export default function IndexPage() {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            thumbnail {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
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
                  <div className="thumb">
                    {edge.node.frontmatter.thumbnail && (
                      <Img
                        fixed={edge.node.frontmatter.thumbnail.childImageSharp.fixed}
                        className="post-thumbnail"
                      />
                    )}
                  </div>
                </Link>
              </li>
            )
          })
        }
      </ol>
    </Layout>
  )
}

