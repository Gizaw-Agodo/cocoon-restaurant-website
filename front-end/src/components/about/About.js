import React from "react";
import "./styles.css";
import image from "../../assets/burger.jpg";
function About() {
  return (
      <div className="about">
        <div className="about_images">
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
        </div>
        <div className="about_info">
          <h2 className="about_title">--About Us-- </h2>
          <h3 className="info_title">Cocoon Juice,pizza and Chicken</h3>
          <p className="info_desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            voluptates aut optio necessitatibus error dolore inventore quo sint
            asperiores voluptatibus omnis, neque magni maiores id, doloremque
            impedit, cupiditate totam accusantium vero iure exercitationem
            consequatur nemo quasi a! Similique, pariatur omnis?
          </p>
        </div>
      </div>
  );
}

export default About;
