import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleBar from "../components/theme/titleBar"
import StorySections from "../components/about/storySections"

const About = () => (
  <Layout>
    <SEO title="About the Club" />
    <TitleBar title="About the Club" />
    <h2 className="mt-4 ml-4">Our Story</h2>
    {/* <StorySections /> */}
    <h2 className="ml-4">Coming Soon</h2>
  </Layout>
)

export default About
