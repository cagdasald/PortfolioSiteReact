import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import send from "../../assets/images/send.svg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2bu0gyp",
        "template_zg6kiac",
        form.current,
        "5Vbar6SO7cuDCk2qS"
      )
      e.target.reset();
  };
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Get in touch</h2>
      <span className="section-subtitle">Contact Me</span>

      <div className="contact-container container grid">
        <div className="contact-content">
          <h3 className="contact-title">Talk to me</h3>

          <div className="contact-info">
            <div className="contact-card">
              <i className="bx bx-mail-send contact-card-icon"></i>

              <h3 className="contact-card-title">Email</h3>
              <span className="contact-card-data">
                cagdas.aldogan00@gmail.com
              </span>

              <a
                href="mailto:cagdas.aldogan00@gmail.com"
                className="contact-button"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact-button-icon"></i>
              </a>
            </div>

            <div className="contact-card">
              <i className="bx bxl-whatsapp contact-card-icon"></i>

              <h3 className="contact-card-title">Whatsapp</h3>
              <span className="contact-card-data">+905346785845</span>

              <a href="https://wa.me/+905346785845" className="contact-button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact-button-icon"></i>
              </a>
            </div>

            <div className="contact-card">
              <i className="bx bxl-linkedin contact-card-icon"></i>

              <h3 className="contact-card-title">Linkedin</h3>
              <span className="contact-card-data">
                Here's My Linkedin Profile
              </span>

              <a
                href="https://www.linkedin.com/"
                className="contact-button"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact-button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-content">
          <h3 className="contact-title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="contact-form-div">
              <label className="contact-form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact-form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact-form-div">
              <label className="contact-form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact-form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="contact-form-div contact-form-area">
              <label className="contact-form-tag">Project/Message</label>
              <textarea
                name="message"
                cols={30}
                rows={10}
                className="contact-form-input"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button className="button button-flex">
              Send Message <img src={send} alt="send" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
