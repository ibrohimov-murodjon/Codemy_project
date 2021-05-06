import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="firstColumn footerRow">
            <p>
              <img src="images/logo.png" alt="" className="img-fluid" />
              <p className="footerColOneText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                nemo minima qui dolor, iusto iure.
              </p>
              <p className="LearnMore">
                <a href="#">Learn More</a>
              </p>
            </p>
          </div>
          <div className="secondColumn footerRow ">
            <h3 className="footer-heading">
              <span>Our Campus</span>
            </h3>
            <ul className="list-unstyled">
              <li>
                <a href="#">Acedemic</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Our Interns</a>
              </li>
              <li>
                <a href="#">Our Leadership</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Human Resources</a>
              </li>
            </ul>
          </div>
          <div className="thirdColumn footerRow ">
            <h3 className="footer-heading">
              <span>Our Courses</span>
            </h3>
            <ul className="list-unstyled">
              <li>
                <a href="#">Math</a>
              </li>
              <li>
                <a href="#">Science &amp; Engineering</a>
              </li>
              <li>
                <a href="#">Arts &amp; Humanities</a>
              </li>
              <li>
                <a href="#">Economics &amp; Finance</a>
              </li>
              <li>
                <a href="#">Business Administration</a>
              </li>
              <li>
                <a href="#">Computer Science</a>
              </li>
            </ul>
          </div>
          <div className="fourtColumn footerRow ">
            <h3 className="footer-heading footer-heading-4">
              <span>Contact</span>
            </h3>
            <ul class="list-unstyled">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Support Community</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Share Your Story</a>
              </li>
              <li>
                <a href="#">Our Supporters</a>
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
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
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
