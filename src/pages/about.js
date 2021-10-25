import React from "react";
import Layout from "../components/Layout"
import Seo from "../components/seo"
import About from "../components/About"

const AboutPage = () => (
    <Layout>
        <Seo title="About" />
        <About />
    </Layout>
)

export default AboutPage;