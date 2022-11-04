import React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Section from '../components/section'
import Posts from '../components/posts'
import './index.module.css'


export default function IndexPage({ data }) {
  const software = data.software.edges

  return (
    <Layout>
      <h1>Hey there!</h1>
      <h3>I'm Daniel Martinez. I love learning new stuff and I put together this simple website to show the projects I worked on.</h3>
      <Section title="Software Projects">
        <Posts posts={software} />
      </Section>
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
          description
          thumbnail {
            childImageSharp {
              fixed(width: 300, height: 300) {
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