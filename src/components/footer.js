import React from "react"
import FooterNav from "./theme/footerNav"

import amritaLogo from "../images/logos/amrita.png"

const Footer = () => (
  <footer>
    <FooterNav />
    <div className="sub-footer row m-0">
      <div className="col-lg-4 p-2" id="footer-logos">
        <a href="https://amrita.edu">
          <img src={amritaLogo} alt="amrita" />
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
          <a href="https://coc.amfoss.in/">Code Of Conduct</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
