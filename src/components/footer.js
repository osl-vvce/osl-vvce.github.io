import React from "react"
import FooterNav from "./theme/footerNav"

import vvceLogo from "../images/vvce.logo.png"
import vvceText from "../images/vvce.text.png"

const Footer = () => (
  <footer>
    <FooterNav />
    <div className="sub-footer row m-0">
      <div className="col-lg-4 p-2" id="footer-logos">
        <a href="https://vvce.ac.in">
          <img src={vvceLogo} alt="vvce" />
        </a>
        <a href="https://vvce.ac.in">
          <img src={vvceText} alt="vvce" />
        </a>
      </div>
      <div className="col-lg-4 p-2">
        <div className="w-100">
          &copy; Team OSL 2017-{new Date().getFullYear()}. All Rights Reserved.
        </div>
      </div>
      <div className="col-lg-3 p-2">
        <div className="w-100">
          <a href="#privacy">Privacy</a>
          <a href="mailto:osl@vvce.ac.in">Feedback</a>
          <a href="#coc">Code Of Conduct</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
