import React from 'react'
import Img from 'gatsby-image'
import postsStyles from './posts.module.css'
import { Link } from 'gatsby'

export default function Posts({ posts }) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    function formatDate(d) {
        var dateComponents = d.split("-")
        return monthNames[dateComponents[1]-1] + " " + dateComponents[0]
    }

    return (
        <ol className={postsStyles.posts}>
            {
                posts.map((edge) => {
                    return (
                        <li>
                            <div className={postsStyles.post}>
                                <div className={postsStyles.titleContainer}>
                                    <h3 className={postsStyles.title}><Link to={`/${edge.node.fields.slug}`}>{edge.node.frontmatter.title}</Link></h3>
                                    <p className={postsStyles.date}>{formatDate(edge.node.frontmatter.date)}</p>
                                </div>
                                <div className={postsStyles.contentContainer}>
                                    <div className={postsStyles.thumbnail}>
                                        {edge.node.frontmatter.thumbnail && (
                                            <Img
                                                fixed={edge.node.frontmatter.thumbnail.childImageSharp.fixed}
                                            />
                                        )}
                                    </div>
                                    <div className={postsStyles.description}>
                                        <p>{edge.node.frontmatter.description}</p>
                                    </div>
                                </div>
                            </div>

                        </li>
                    )
                })
            }
        </ol>
    )
}