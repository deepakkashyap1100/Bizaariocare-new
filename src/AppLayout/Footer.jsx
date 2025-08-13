import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
  FaBitcoin,
} from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { MdEmail, MdPhone, MdLanguage } from "react-icons/md";
import { FaFigma } from "react-icons/fa";
import "../assets/css/footer.css";
import footerLogo from '../assets/images/footerlogo.png'
import { NavLink } from "react-bootstrap";


const Footer = () => {
  return (
    <footer className="footer-section" >
      <div className="container py-5">
        <div className="row gy-4">
          {/* Logo & About */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-logo">
 <img
              src={footerLogo}
              alt="Bizaario Logo"
              className="mb-3"
            />
            </div>
           
            <p className="footer-text">
              High level experience in web design and development knowledge,
              producing quality work.
            </p>
            <h6 className="fw-bold">Follow us</h6>
            <div className="d-flex gap-3 mt-2">
              <FaFacebookF className="social-icon" />
              <FaTelegramPlane className="social-icon" />
              <FaInstagram className="social-icon" />
             <FaFigma className="social-icon"/>
            </div>
          </div>
 
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3"><MdOutlinePhoneInTalk /> Phone Number</h6>
            <p className="mb-3 light-color"> +91 5252525252</p>

            <h6 className="fw-bold mb-1"><MdOutlineMailOutline /> Email ID</h6>
            <p className="mb-3 light-color">rjvijs42@gmail.com</p>

            <h6 className="fw-bold mb-1"><TbWorld /> Website</h6>
            <p className="mb-0 light-color">www.papayapalette.com</p>
          </div>
 
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled ft-quick-link">
              {/* <NavLink to='/about'>About Us </NavLink> */}
              <li>About Us</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
 
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3">Use Cases</h6>
            <ul className="list-unstyled ft-quick-link">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Legal</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom text-center py-3">
        ©2021 BIZAARIO CONNECT All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
