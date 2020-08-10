import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Section from '../components/section'
import Posts from '../components/posts'

export default function AboutPage({ data}) {
    const woodworking = data.woodworking.edges
    const cnc = data.cnc.edges
    const plotter = data.plotter.edges

    return (
        <div>
            <Layout>
                <Section title="Woodworking Projects">
                    <Posts posts={woodworking} />
                </Section>
                <Section title="CNC Projects">
                    <Posts posts={cnc} />
                </Section>
                <Section title="Plotter Drawings">
                    <Posts posts={plotter} />
                </Section>
            </Layout>
        </div>
    )
}

export const pageQuery = graphql`
query OtherQuery {
  woodworking: allMarkdownRemark(filter: {frontmatter: {category: {eq: "woodworking"}}}) {
    edges {
      node {
        frontmatter {
          title
          date
          tags
          thumbnail {
            childImageSharp {
              fixed(width: 300, height: 200) {
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
              fixed(width: 300, height: 200) {
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
              fixed(width: 300, height: 200) {
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