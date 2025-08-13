import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
  FaBitcoin,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLanguage } from "react-icons/md";
import "./Footer.css";

const OnlineClnicCard = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row align-items-start py-5">
          {/* Logo & About */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <img
              src="https://via.placeholder.com/120x50?text=LOGO"
              alt="Bizaario Logo"
              className="footer-logo mb-3"
            />
            <p className="footer-text">
              High level experience in web design and development knowledge,
              producing quality work.
            </p>
            <h6 className="fw-bold mb-2">Follow us</h6>
            <div className="d-flex gap-3">
              <FaFacebookF className="social-icon" />
              <FaTelegramPlane className="social-icon" />
              <FaInstagram className="social-icon" />
              <FaBitcoin className="social-icon" />
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div className="mb-3">
              <h6 className="fw-bold mb-1">
                <MdPhone className="me-2" />
                Phone Number
              </h6>
              <p className="mb-0">+91 5252525252</p>
            </div>
            <div className="mb-3">
              <h6 className="fw-bold mb-1">
                <MdEmail className="me-2" />
                Email ID
              </h6>
              <p className="mb-0">rjvijs42@gmail.com</p>
            </div>
            <div>
              <h6 className="fw-bold mb-1">
                <MdLanguage className="me-2" />
                Website
              </h6>
              <p className="mb-0">www.papayapalette.com</p>
            </div>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="footer-list">
              <li>About Us</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Use Cases */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3">Use Cases</h6>
            <ul className="footer-list">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Legal</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
 
    </footer>
  );
};

export default OnlineClnicCard;
