import React from 'react';

import './AboutComponent.css';
import { FaPowerOff } from "react-icons/fa";
import { PiLeafFill } from "react-icons/pi";

const AboutComponent = () => {
  return (
    <section className="about" id="nosotros">
    <div className="about-content">
      <h2>Services</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam vestibulum orci a sapien imperdiet maximus.
          Nullam vestibulum orci a sapien imperdiet maximus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.q1</p>
      <div className="about-img">
        <div className="about-imgx">
          <FaPowerOff className="img-job"/>
          <h4>POWER</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
        <div className="about-imgx">
          <img className="img-job" alt="share" src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9" />
          <h4>JOB DONE</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
        <div className="about-imgx">
          <PiLeafFill className="img-job"/>
          <h4>GREEN</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
      </div>
    </div>

  </section>
  )
}

export default AboutComponent;
