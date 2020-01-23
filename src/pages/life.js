import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleBar from "../components/theme/titleBar"
import ClubLife from "../components/clubLife/clubLife"

const Life = () => (
  <Layout>
    <SEO title="Life in the Club" />
    <TitleBar title="Life in the Club" />
    {/* <ClubLife /> */}
    <h2 className="mt-4 ml-4">Coming Soon</h2>
  </Layout>
)

export default Life
