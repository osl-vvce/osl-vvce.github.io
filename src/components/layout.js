import React from "react"

import Header from "./header"
import Footer from "../assets/footer/footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div id="page-container">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
