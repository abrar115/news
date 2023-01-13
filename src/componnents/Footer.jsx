import React from "react";
import logo from "../assets/logo.jpg";
function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} alt="logo" />
        <p className="footer__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          dolore exOmnis, velit vel.
        </p>
      </div>
      <div className="useLink">
        <ol type="number">
          <li>Home</li>
          <li>About</li>
          <li>Articles</li>
          <li>Contact</li>
        </ol>
      </div>
      <div className="CallToAction">
        <ul>
          <li>Company Police</li>
          <li>Cookies policy</li>
          <li>Becoming our Presenter</li>
          <li>Breaking News</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
