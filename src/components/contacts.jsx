import React from "react";

function Contacts(){
    return(
        <div id="contacts">
        <div class="text-center"><h1 data-aos="fade-down">Contact</h1></div>
        <div class="condiv" data-aos="zoom-in">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name"/>
          </div>
        <div class="mb-3">
            <label for="exampleFormControlInput2" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com"/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="mb-3">
            <button class="btn btn-primary" type="submit">Send</button>
          </div>
        </div>
    </div>
    );
}

export default Contacts;