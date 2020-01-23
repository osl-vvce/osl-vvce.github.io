import React from "react"

const FooterNav = () => (
  <div id="footer-nav">
    <div className="row m-0">
      <div className="col-lg-2 col-6  d-flex justify-content-center p-2">
        <div>
          <h4>The Club</h4>
          <ul>
            <li>
              <a href="/about#story">Our Story</a>
            </li>
            <li>
              <a href="/members">Members</a>
            </li>
            <li>
              <a href="/about#teams">Teams</a>
            </li>
            <li>
              <a href="/about#timeline">Timeline</a>
            </li>
            <li>
              <a href="/achievements">Achievements</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-6 d-flex justify-content-center p-2">
        <div>
          <h4>For Students</h4>
          <ul>
            <li>
              <a href="https://joinosl.vvce.ac.in/">How to Join?</a>
            </li>
            <li>
              <a href="https://github.com/osl-vvce/learncode">
                Learning Resources
              </a>
            </li>
            <li>
              <a href="https://github.com/osl-vvce/Workshops">
                Workshops & Event Resources
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-6  d-flex p-2">
        <div>
          <h4>For Partners</h4>
          <ul>
            <li>
              <a href="/members">View Profiles</a>
            </li>
            <li>
              <a href="/projects">View Projects</a>
            </li>
            <li>
              <a href="/about#impact">Our Impact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-6 p-2">
        <div>
          <h4>The Club</h4>
          <ul>
            <li>
              <a href="#blog">OSL Blog</a>
            </li>
            <li>
              <a href="/about#social-initiatives">Social Initiatives</a>
            </li>
            <li>
              <a href="https://github.com/osl-vvce/Workshops">
                Events & Workshops
              </a>
            </li>
            <li>
              <a href="/news">Press & Media</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="contact-details" className="col-lg-2 col-6 d-flex p-2">
        <div id="contact">
          <h4>Contact Us</h4>
          <div className="footer-contact">
            <h6>
              <i className="fa fa-comments" /> IRC Chat
            </h6>
            <p>#oslvvce on Freenode.</p>
            <h6>
              <i className="fa fa-envelope" /> Email
            </h6>
            <p>
              <a href="mailto:osl@vvce.ac.in"> osl@vvce.ac.in</a>
            </p>
            <h6>
              <i className="fa fa-location-arrow" /> Address
            </h6>
            <p>
              OSL@VVCE, <br /> Vidyavardhaka College of Engineering, <br />
              III Stage, Gokulam,
              <br />
              Mysuru, Karnataka - 570017
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default FooterNav
