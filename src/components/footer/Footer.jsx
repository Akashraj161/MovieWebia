import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
          <li className="menuItem">
            <a href="https://fast.com"> Speed Test</a>
          </li>
          <li className="menuItem">Account</li>
          <li className="menuItem">Cookie Preferences</li>
          <li className="menuItem">Contact Us</li>
        </ul>
        <div className="socialIcons">
          <a
            className="colorwhite"
            href="https://www.facebook.com/akkiraj1611"
          >
            <span className="icon">
              <FaFacebookF />
            </span>
          </a>
          <a
            className="colorwhite"
            href="https://www.instagram.com/akash_r.a.j/"
          >
            <span className="icon">
              <FaInstagram />
            </span>
          </a>
          <a className="colorwhite" href="https://twitter.com/rajakki11">
            <span className="icon">
              <FaTwitter />
            </span>
          </a>
          <a
            className="colorwhite"
            href="https://www.linkedin.com/in/akash-ar161/"
          >
            <span className="icon">
              <FaLinkedin />
            </span>
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
