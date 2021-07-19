import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="firstColumn footerRow">
            <div>
              <img src="images/logo.png" alt="" className="img-fluid" />
              <p className="footerColOneText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                nemo minima qui dolor, iusto iure.
              </p>
              <h1 className="LearnMore">
                <Link to="/">Learn More</Link>
              </h1>
            </div>
          </div>
          <div className="secondColumn footerRow ">
            <h3 className="footer-heading">
              <span>Our Campus</span>
            </h3>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Academic</Link>
              </li>
              <li>
                <Link to="/">News</Link>
              </li>
              <li>
                <Link to="/">Our Interns</Link>
              </li>
              <li>
                <Link to="/">Our Leadership</Link>
              </li>
              <li>
                <Link to="/">Careers</Link>
              </li>
              <li>
                <Link to="/">Human Resources</Link>
              </li>
            </ul>
          </div>
          <div className="thirdColumn footerRow ">
            <h3 className="footer-heading">
              <span>Our Courses</span>
            </h3>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Math</Link>
              </li>
              <li>
                <Link to="/">Science &amp; Engineering</Link>
              </li>
              <li>
                <Link to="/">Arts &amp; Humanities</Link>
              </li>
              <li>
                <Link to="/">Economics &amp; Finance</Link>
              </li>
              <li>
                <Link to="/">Business Administration</Link>
              </li>
              <li>
                <Link to="/">Computer Science</Link>
              </li>
            </ul>
          </div>
          <div className="fourtColumn footerRow ">
            <h3 className="footer-heading footer-heading-4">
              <span>Contact</span>
            </h3>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Help Center</Link>
              </li>
              <li>
                <Link to="/">Support Community</Link>
              </li>
              <li>
                <Link to="/">Press</Link>
              </li>
              <li>
                <Link to="/">Share Your Story</Link>
              </li>
              <li>
                <Link to="/">Our Supporters</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="madeBy">
            <div className="copyright">
              <p className="footerPrgr">
                Copyright &copy;{new Date().getFullYear()} All rights reserved |
                This template is made with🤍by{" "}
                <a href="https://codemy.uz" target="blank">
                  Codemy Teams.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
