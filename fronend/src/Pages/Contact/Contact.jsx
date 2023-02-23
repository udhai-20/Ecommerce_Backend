import React from "react";
import BreadCrums from "../../Components/BreadCrums/BreadCrums";
import "./Contact.css";
import Meta from "../../Components/MetaComponent/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiInfoCircle, BiPhoneCall } from "react-icons/bi";
function Contact(props) {
  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrums title="Contact" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62577.31484172912!2d79.66269478702021!3d11.401577476101853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54c23aa1bce10b%3A0xe1a29e91a8ec81aa!2sChidambaram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1677140088450!5m2!1sen!2sin"
                width="600"
                height="450"
                allowFullScreen=""
                className="border-0 w-100"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-innerwrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-titlemb-4">Contact</h3>
                  <form className="d-flex flex-column gap-20">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="mobile number"
                      />
                    </div>
                    <div>
                      <textarea
                        type="text"
                        className="w-100 form-control"
                        cols="30"
                        rows="10"
                        placeholder="comments"
                      />
                    </div>
                    <div>
                      <button className="button">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-8">
                      <li className="mb-3 d-flex align-items-center gap-10">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0">
                          Hno:68/62 C.KothanGudi Thoppu,Annamalai Nagar,
                          Chidambaram-600821,
                        </address>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-10">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel:+91 9444052343">+91 9444052343</a>
                      </li>
                      <li className="mb-3 d-flex align-items-center gap-10">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:udhayaprakash122@gmail.com">
                          udhayaprakash122@gmail.com
                        </a>
                      </li>
                      <li className="mmb-3 d-flex align-items-center gap-10">
                        <BiInfoCircle className="fs-5" />
                        <p className="mb-0">
                          Mondat - Friday- is 10 Am -8:o pm
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
