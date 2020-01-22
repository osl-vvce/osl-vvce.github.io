import React from "react"
import Darkmode from "darkmode-js"
import Header from "./header"
import Footer from "../assets/footer/footer"
import ".././assets/layout/layout.styles.css"

const Layout = ({ children }) => {
  new Darkmode().showWidget()
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
