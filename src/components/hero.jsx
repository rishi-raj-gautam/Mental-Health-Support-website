import React, { useEffect } from "react";
import "./hero.css";
import mediImage from './image.png'
import girlmedi from './girlmedi.jpg'
import yogaImage from './yoga.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Hero() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="hero container-fluid">
            <div className="row">
                <div className="col-9 ps-5">
                    <div className="container-fluid heroLeft" >
                        <div className="content" >
                            <h4 data-aos="fade-up">Mental Help</h4>
                            <div className="underLine"></div>
                            <div className="comment" data-aos="fade-down">
                                April 6, 2024 |No comments |AI Trends
                            </div>
                            <div className="comment" data-aos="fade-down">
                                Mental health is a crucial aspect of our well-being that we often overlook. While we focus on our physical health…
                            </div>
                        </div>
                    </div>
                    <div className="hero2">
                        <h5 >Mindfulness Meditation Updates</h5>
                        <img src={yogaImage} class="yogaImage" data-aos="zoom-in"></img>
                        <h2 data-aos="fade-down">Mindful Meditation Made Easy: How Mind Help Can Help You Find Inner Peace</h2>
                        <h4 data-aos="fade-down">April 6, 2024•Mindfulness Meditation</h4>
                        <span data-aos="fade-down">Mindfulness meditation is a powerful tool for reducing stress and anxiety and improving mental well-being. With the rise of technology,…</span>
                    </div>
                </div>
                <div className="col-3">
                    <div className="container-fluid heroRight">
                        <img src={mediImage} className="image" data-aos="fade-left" alt="image" />
                        <div className="heading5"><h5 className="pt-3">Hello </h5></div>

                        <div className="heading5"><h5 className="pt-4 pb-3">Mindful Meditation Made Easy: How Mind Help Can Help You Find Inner Peace </h5></div>
                        <img src={girlmedi} className="image" data-aos="fade-left" alt="image" />
                    </div>


                </div>
            </div>
            <div className="underLine mt-3"></div>
        </div>
    );
}

export default Hero;