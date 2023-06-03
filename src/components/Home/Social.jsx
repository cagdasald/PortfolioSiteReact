import React from "react";

const Social = () => {
  return (
    <div className="home-social">
      <a
        href="https://tr.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F"
        className="home-social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://github.com/"
        className="home-social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-github-alt"></i>
      </a>

      <a
        href="https://mail.google.com/"
        className="home-social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-google"></i>
      </a>
    </div>
  );
};

export default Social;
