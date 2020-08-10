import React from 'react'
import Img from 'gatsby-image'
import indexStyles from './posts.module.scss'
import { Link } from 'gatsby'

export default function Posts({ posts }) {
    return (
        <ol className={indexStyles.posts}>
            {
                posts.map((edge) => {
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
    )
}