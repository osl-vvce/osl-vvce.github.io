import React from "react"
import FooterNav from "./theme/footer-nav"

import amritaLogo from "../images/logos/vvce.text.png"
import bi0sLogo from "../images/logos/vvce.logo.png"

const Footer = () => (
  <footer>
    <FooterNav />
    <div className="sub-footer row m-0">
      <div className="col-lg-4 p-2" id="footer-logos">
        <a href="https://vvce.ac.in">
          <img src={amritaLogo} alt="amrita" />
        </a>
        <a href="https://vvce.ac.in">
          <img src={bi0sLogo} alt="bi0s" />
        </a>
      </div>
      <div className="col-lg-4 p-2">
        <div className="w-100">
          &copy; Team OSL 2017-{new Date().getFullYear()}. All Rights
          Reserved.
        </div>
      </div>
      <div className="col-lg-3 p-2">
        <div className="w-100">
          <a href="#privacy">Privacy</a>
          <a href="#feedback">Feedback</a>
          <a href="#terms">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
