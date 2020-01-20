import React from "react"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <Header>
    <div id="page-container">
      <main>{children}</main>
    </div>
    <Footer />
  </Header>
)

export default Layout
