import React, { useEffect } from "react";
import "./blogs.css";
import manImage from './man.jpg'
import womImage from './woman.jpg'

import phoneImage from './phone.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Blogs() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="blogs px-5">
            <h1 className="pb-3"  data-aos="fade-down">Blogs</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100" data-aos="fade-up">
                        <img src={manImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">The Pros and Cons of Teletherapy: How Online Therapy Can Help or Hinder Mental Health</h5>
                            <p className="card-text">April 6, <br />2024
                                With the rise of technology and the internet, the way…</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100" data-aos="fade-down">
                        <img src={womImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">“Healing is possible” – Sara’s story</h5>
                            <p className="card-text">April 7,<br />In this blog, Sara reflects on the impact depression had on her wellbeing, relationships, education and home life.  <br /></p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100" data-aos="fade-up">
                        <img src={phoneImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">How Mind Help is Revolutionizing Mental Health Support and Well-being</h5>
                            <p className="card-text">April 6, 2024 <br />
                                In recent years, mental health has become a pressing matter, with more….</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Blogs;