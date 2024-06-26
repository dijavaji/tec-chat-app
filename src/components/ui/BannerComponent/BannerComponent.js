import React from 'react';
import { Link} from 'react-router-dom';

import "./BannerComponent.css";
//import bannerImg from "../../../assets/img/scott-lord.jpg";
//https://picsum.photos/1920/1080?random

const BannerComponent = () => {
  return (
    <div>
      <section className="banner">
        <div className="banner-content">
          <img src="https://picsum.photos/1920/1080?random" alt="img-banner"/>
          <div className="banner-text">
            <h2>Live Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam vestibulum orci a sapien imperdiet maximus.</p>
            <Link to="#">Leer mas</Link>
          </div>

        </div>

      </section>
      <section className="about" id="nosotros">
      <div className="about-content">
        <h2>Portfolio</h2>
        <h4>What we have created</h4>
        <div className="about-img">
          <div className="about-imgx">
            <img className="img-job" alt="Paris" src="https://www.w3schools.com/bootstrap/paris.jpg" />
            <p><strong>Paris</strong></p>
            <p>Yes, we built Paris</p>
          </div>
          <div className="about-imgx">
            <img className="img-job"  alt="New York" src="https://www.w3schools.com/bootstrap/newyork.jpg" />
            <p><strong>New York</strong></p>
            <p>We built New York</p>
          </div>
          <div className="about-imgx">
            <img className="img-job" alt="San Francisco" src="https://www.w3schools.com/bootstrap/sanfran.jpg" />
            <p><strong>San Francisco</strong></p>
            <p>Yes, San Fran is ours</p>
          </div>
        </div>
      </div>

    </section>
    </div>
  )
}

export default BannerComponent;
