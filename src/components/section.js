import React from 'react'
import sectionStyles from './section.module.css'


export default function Section({ title, children }) {
    return (
        <section className={sectionStyles.section}>
            <h2 className={sectionStyles.title}>{title}</h2>
            {children}
        </section>
    )
}