import React from "react";
import "./BottomNavbar.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTelegram,
  FaLinkedin,
} from "react-icons/fa";

function BottomNavbar() {
  return (
    <div className="bottomNavbar">
      <div className="footer-container">
        <div className="left-container">
          <img
            src="https://files.codingninjas.in/new-logo-03-11984.svg"
            alt=""
          />
          <p>Copyright @Sunrise Mentors Pvt Ltd</p>
        </div>
        <div className="middle-container">
          <div className="sec1">
            <ol>
              <li className="hover-underline-animation">CODING NINJAS</li>

              <li className="hover-underline-animation">About Us</li>
              <li className="hover-underline-animation">Privacy Policy</li>
              <li className="hover-underline-animation">Terms & Condition</li>
              <li className="hover-underline-animation">
                Pricing & Refund Policy
              </li>
              <li className="hover-underline-animation">Bug Bounty</li>
              <li className="hover-underline-animation">Our Students</li>
              <li className="hover-underline-animation">Press Release</li>
            </ol>
          </div>
          <div className="sec2">
            <ol>
              <li className="hover-underline-animation">PRODUCTS</li>

              <li className="hover-underline-animation">Courses</li>
              <li className="hover-underline-animation">
                Try courses for free
              </li>
              <li className="hover-underline-animation">Career Camp</li>
              <li className="hover-underline-animation">Hire Talent</li>
            </ol>
          </div>
          <div className="sec3">
            <ol>
              <li className="hover-underline-animation">COMMUNITY</li>
              <li className="hover-underline-animation">Codestudio</li>
              <li className="hover-underline-animation">Blog</li>
              <li className="hover-underline-animation">Events</li>
              <li className="hover-underline-animation">Campus Ninja</li>
              <li className="hover-underline-animation">Affilate</li>
              <li className="hover-underline-animation">Scholarship Event</li>
            </ol>
          </div>
        </div>
        <div className="social_container">
          <h5>Follow us on</h5>
          <ol className="social_container_icons">
            <li className="icons">
              <FaFacebook size="2em"/>
            </li>
            <li className="icons">
              <FaInstagram size="2em" />
            </li>
            <li className="icons">
              <FaYoutube size="2em"/>
            </li>
            <li className="icons">
              <FaTwitter size="2em" />
            </li>
            <li className="icons">
              <FaLinkedin size="2em" />
            </li>
            <li className="icons">
              <FaTelegram size="2em" />
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default BottomNavbar;
