import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import about from "../assets/about.jpg";
function About() {
  return (
    <div>
      <Header />
      <div className="about">
        <div className="about_image">
          <img src={about} alt="" />
        </div>
        <div className="about_text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab totam
            temporibus eligendi. Repudiandae neque doloremque nesciunt.
            Aspernatur magni recusandae voluptatibus.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            reiciendis, quasi labore quo laborum nostrum obcaecati
            exercitationem cupiditate! Illo, obcaecati?
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
