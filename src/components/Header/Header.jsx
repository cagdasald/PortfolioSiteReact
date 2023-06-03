import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  const [toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav-logo">
          Çağdaş
        </a>

        <div className={toggle ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list grid">
            <li className="nav-item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="uil uil-estate nav-icon"></i>Home
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="uil uil-user nav-icon"></i>About
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills" ? "nav-link active-link" : "nav-link"
                }
              >
                <i className="uil uil-file-alt nav-icon"></i>Skills
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? "nav-link active-link"
                    : "nav-link"
                }
              >
                <i className="uil uil-briefcase-alt nav-icon"></i>Services
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#qualification"
                onClick={() => setActiveNav("#qualification")}
                className={
                  activeNav === "#qualification"
                    ? "nav-link active-link"
                    : "nav-link"
                }
              >
                <i className="uil uil-scenery nav-icon"></i>Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav-link active-link"
                    : "nav-link"
                }
              >
                <i className="uil uil-message nav-icon"></i>Contact
              </a>
            </li>
          </ul>

          <i
            class="uil uil-times nav-close"
            onClick={() => showMenu(!toggle)}
          ></i>
        </div>

        <div className="nav-toggle" onClick={() => showMenu(!toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
