import React, { useEffect } from 'react';
import './consult.css'
import Doc1Image from './doc1.jpg'
import Doc2Image from './doc2.jpg'
import Doc3Image from './doc3.jpg'
import phoneImage from './phone.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Consult() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='consult'>
      <div className="underLine"></div>
      <h1 className='pt-2' data-aos="fade-down">Consultation</h1>
      <div className="card-group">
        <div className="card m-3" data-aos="fade-up">
          <img src={Doc1Image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Dr Nita Gupta</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            <button type="button" class="btn btn-secondary">Book an Appointment</button>
          </div>
        </div>
        <div className="card m-3 "data-aos="fade-down">
          <img src={Doc2Image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Dr. Rajeev Das</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            <button type="button" class="btn btn-secondary">Book an Appointment</button>
          </div>
        </div>
        <div className="card m-3" data-aos="fade-up">
          <img src={Doc3Image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Dr. Priya banerjee</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            <button type="button" class="btn btn-secondary">Book an Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consult;