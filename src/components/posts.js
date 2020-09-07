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
                            <h3 className={postsStyles.title}>
                                <Link to={`/${edge.node.fields.slug}`}>{edge.node.frontmatter.title}</Link>
                            </h3>
                            <p className={postsStyles.date}>{edge.node.frontmatter.date}</p>
                            <p className={postsStyles.description}>{edge.node.frontmatter.description}</p>
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