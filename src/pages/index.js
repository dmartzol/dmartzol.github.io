import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import indexStyles from './index.module.scss'
import Img from 'gatsby-image'


export default function IndexPage({data}) {
  const software = data.software.edges
  const woodworking = data.woodworking.edges
  const cnc = data.cnc.edges
  const plotter = data.plotter.edges

  return (
    <Layout>
      <h1>Hey there!</h1>
      <h3>I'm Daniel Martinez. I love learning new stuff and I put together this simple website to show the projects I worked on.</h3>
      <ol className={indexStyles.posts}>
        {
          software.map((edge) => {
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

export const pageQuery = graphql`
query IndexQuery {
  software: allMarkdownRemark(filter: {frontmatter: {category: {eq: "software"}}}) {
    edges {
      node {
        frontmatter {
          title
          date
          tags
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
  woodworking: allMarkdownRemark(filter: {frontmatter: {category: {eq: "woodworking"}}}) {
    edges {
      node {
        frontmatter {
          title
          date
          tags
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
  plotter: allMarkdownRemark(filter: {frontmatter: {category: {eq: "plotter-drawings"}}}) {
    edges {
      node {
        frontmatter {
          title
          date
          tags
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
  cnc: allMarkdownRemark(filter: {frontmatter: {category: {eq: "cnc"}}}) {
    edges {
      node {
        frontmatter {
          title
          date
          tags
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


`