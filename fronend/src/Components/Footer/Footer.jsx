import React from "react";
import "./Footer.css";
import {
  BsSearch,
  BsLinkedin,
  BsInstagram,
  BsYoutube,
  BsGithub,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row aligin-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-20 aligin-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Signup Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="button-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">ContactUs</h4>
              <div>
                <address className="text-white">
                  Hno:68/62 C.KothanGudi Thoppu,
                  <br />
                  Annamalai Nagar,
                  <br />
                  Chidambaram-600821,
                  <br />
                </address>
                <a
                  href="tel:+91 9444052343"
                  className="mt-1 d-block mb-2 text-white"
                >
                  +91 9444052343
                </a>
                <a
                  href="mailto:udhayaprkash122@gmail.com"
                  className="mt-1 d-block mb-3 text-white"
                >
                  udhayaprkash122@gmail.com
                </a>
                <div className="social_links d-flex align-items-center gap-30">
                  <a href="">
                    <BsLinkedin className="fs-4 text-white" />
                  </a>
                  <a href="">
                    <BsInstagram className="fs-4 text-white" />
                  </a>
                  <a href="">
                    <BsGithub className="fs-4 text-white" />
                  </a>
                  <a href="">
                    <BsYoutube className="fs-4 text-white" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/" className="text-white py-2 mb-1">
                  Blogs
                </Link>
                <Link to="/" className="text-white py-2 mb-1">
                  Terms & condition
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/" className="text-white py-2 mb-1">
                  About Us
                </Link>
                <Link to="/" className="text-white py-2 mb-1">
                  Faq
                </Link>
                <Link to="/" className="text-white py-2 mb-1">
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-3">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/" className="text-white py-2 mb-1">
                  laptops
                </Link>
                <Link to="/" className="text-white py-2 mb-1">
                  Headphones
                </Link>
                <Link to="/" className="text-white py-2 mb-1">
                  Tablets
                </Link>
                <Link to="/" className="text-white py-2 mb-1">
                  Watchs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                CopyRights & copy: {new Date().getFullYear()}; Powered by
                UdhayaDev
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
