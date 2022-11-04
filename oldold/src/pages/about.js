import React from 'react'
import Layout from '../components/layout'
import dani from '../../content/images/me-0.jpg'

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <h1>About me</h1>
                <p>I prefer to keep an air of mystery about me until I know what to say.</p>
                <p>You can contact me at <a href="mailto:danielmartinezolivas@gmail.com">danielmartinezolivas@gmail.com</a></p>
                <div>
                    <img src={dani} alt="Dani" />
                </div>
            </Layout>
        </div>
    )
}

export default AboutPage