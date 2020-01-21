import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeLanding from "../components/home/homeLanding"

const IndexPage = () => (
  <Layout>
    <SEO title="Open Source Lab" />
    <HomeLanding />
  </Layout>
)

export default IndexPage
