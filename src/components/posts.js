import React from 'react'
import Img from 'gatsby-image'
import postsStyles from './posts.module.css'
import { Link } from 'gatsby'

export default function Posts({ posts }) {
    return (
        <ol className={postsStyles.posts}>
            {
                posts.map((edge) => {
                    return (
                        <li className={postsStyles.post}>
                            <Link to={`/${edge.node.fields.slug}`}>
                                <h3>{edge.node.frontmatter.title}</h3>
                            </Link>
                            <p className={postsStyles.date}>{edge.node.frontmatter.date}</p>
                            <p>{edge.node.frontmatter.description}</p>
                            <div className="thumb">
                                {edge.node.frontmatter.thumbnail && (
                                    <Img
                                        fixed={edge.node.frontmatter.thumbnail.childImageSharp.fixed}
                                        className="post-thumbnail"
                                    />
                                )}
                            </div>
                        </li>
                    )
                })
            }
        </ol>
    )
}