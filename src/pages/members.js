import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MembersPage = ({
  data: {
    allMembersYaml: { edges },
  },
}) => {
  console.log(edges[0].node.avatar)
  return (
    <Layout>
      <SEO title="Members" />
      <img src={edges[0].node.avatar.childImageSharp.resize.src} alt="member" />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMembersYaml(sort: { fields: firstName, order: ASC }) {
      edges {
        node {
          id
          firstName
          lastName
          tagline
          username
          role
          avatar {
            childImageSharp {
              resize(width: 300) {
                src
              }
            }
          }
        }
      }
    }
  }
`

export default MembersPage
