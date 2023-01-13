import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      {/* nav */}
      <nav>
        <ul className="header__navbar">
          <Link style={{ textDecoration: "none", color: "#000000" }} to={"/"}>
            <li>Home</li>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#000000" }}
            to={"/about"}
          >
            <li>About</li>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#000000" }}
            to={"/articles"}
          >
            <li>Articles</li>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#000000" }}
            to={"/contact"}
          >
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
