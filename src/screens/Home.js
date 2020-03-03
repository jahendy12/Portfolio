import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
// import { FaLinkedIn } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { Document } from 'react-pdf';

function Home() {
    return (
<div class="row section">
<h1 class="white-text center">Projects</h1>
  <div class="col m4">
    <div class="card #616161 grey darken-2">
      <div class="card-image">
        <img src={require("../images/Fixify.png")}/>
      </div>
      <div class="card-content">
          <h4 class="white-text">Fixify</h4>
        <p class="white-text">An app developed to connect freelance mechanics with local people having issues with their cars!</p>
      </div>
      <div class="card-action">
        <a class="white-text" href="https://fixify-react-app.herokuapp.com/">Link to Fixify</a>
      </div>
    </div>
  </div>
  <div class="col m4">
    <div class="card #616161 grey darken-2">
      <div class="card-image">
        <img src={require("../images/VibeTune.png")}/>
      </div>
      <div class="card-content">
        <h4 class="white-text">VibeTune</h4>
        <p class="white-text">An app developed to connect music lovers with those who may have similar tastes.</p>
      </div>
      <div class="card-action">
        <a class="white-text" href="https://vibetune-react.herokuapp.com/">Link to VibeTune</a>
      </div>
    </div>
  </div>
  <div class="col m4">
    <div class="card #616161 grey darken-2">
      <div class="card-image">
        <img src={require("../images/JoeKitchen.png")}/>
      </div>
      <div class="card-content">
        <h4 class="white-text">Joe's Kitchen</h4>
        <p class="white-text">An app to create and view recipes created by other users.</p>
      </div>
      <div class="card-action">
        <a class="white-text" href="https://recipeapp5.herokuapp.com/">Link to Joe's Kitchen</a>
      </div>
    </div>
  </div>
  
  <div className="container section light-blue-text text-darken-4">
          i
  </div>
  {/* <div class="divider"></div> */}
  <div className="container section">
  <div>
        <h3 className="white-text center">About Me</h3>
        <p className="white-text">As a software developer, I get my motivation from creating innovative technology with clean code that delivers an enjoyable user experience. As a professional, I value transparency, constructive criticism from my team leaders and dependability. I have an even-keeled demeanor that responds well in difficult situations and thrive under pressure. I look forward to contributing my coding and professional skills and talents in a collaborative team environment. </p>
    </div> 
    </div>
   <div class="divider"></div>
  <div className="container section">
    <h3 className="white-text center">Contact Information</h3>
    <ul className="white-text center">
        <li>Phone: (513) 600-4494</li>
        <li>Email: jahendy12@gmail.com</li>
        <div className="social-container">
            <li><a href='https://github.com/jahendy12' className="github social">Github
            <FontAwesomeIcon size="2x"/></a></li>
            {/* <FaGithub /> */}
        </div>
        <div className="social-container">
            <li><a href='https://www.linkedin.com/in/joe-hendy/' className="LinkedIn social">LinkedIn
            <FontAwesomeIcon size="2x"/></a></li>
            {/* <FaLinkedIn /> */}
        </div>
        {/* <li>Resume:<a><Document file="../public/JHResume.pdf"/></a></li> */}
        {/* <awesome-button type="github" width="120" target="blank" href='https://github.com/jahendy12'></awesome-button> */}
        {/* icon={FaGithub}
        icon={FaLinkedIn} */}
    </ul>
</div> 
</div>
    )
}

export default Home
