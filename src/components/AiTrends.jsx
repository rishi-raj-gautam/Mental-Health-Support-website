import React, { useEffect } from "react";
import "./aitrends.css";
import roboImage from './robo.jpg'
import mobileImage from './mobile.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
function AiTrends() {
  useEffect(() => {
    AOS.init();
}, []);
  return (
    <div className="aiHome">
    <div>
    <h1 className="pt-4"  data-aos="fade-down">Mental Heath AI</h1>
    </div>
      <div id="carouselExampleCaptions" className="carousel slide slider" data-aos="zoom-in">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active p-5">
            <img src={roboImage} className="d-block w-100" alt="..." style={{ opacity: 0.5 }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>The Latest AI Trends in Mental Health: Chatbots, Predictive Analytics, and Virtual Reality Therapy</h5>
              <p>Artificial Intelligence (AI) technology is revolutionizing the mental health industry. From chatbots that can offer emotional support to predictive analytics….</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={mobileImage} className="d-block w-100" alt="..." style={{ opacity: 0.5 }}/>
            <div className="carousel-caption d-none d-md-block">
              <h5>mental Help</h5>
              <p>Mental health is a crucial aspect of our well-being that we often overlook. While we focus on our physical health…</p>
            </div>
          </div>
    
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="underLine mt-3"></div>
    </div>

  );
}

export default AiTrends;