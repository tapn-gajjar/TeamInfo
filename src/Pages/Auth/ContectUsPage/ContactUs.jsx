import React from "react";
import '../ContectUsPage/contactUs.scss'
import Phone from '../../../assets/icons/phoneIcon.svg'
import Gmail from '../../../assets/icons/gmailIcon.svg'
function ContactUs() {
  return (
    <div className="contactUs-container">
      <div className="contactUs-section">
        <div className="contactBackground"></div>
        <div className="contactUsAndGoogleMap">
          <div className="contactUs-box">
            <div className="contactUs-heading">
                <p>Contact <span>Us</span></p>
            </div>
            <div className="heading-description">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum possimus porro itaque illum ullam minus.</p>
            </div>
            <div className="phone-wrap">
              {/* <img src={Phone} alt="" /> */}
              {/* <p>+91 9999999999</p> */}
              <input type="number" id="number" placeholder="Enter Your Number" required/>
            </div>
            <div className="gmail-wrap">
              {/* <img src={Gmail} alt="" /> */}
              {/* <a href="tapan.s@latitudetechnolabs.com">tapan.s@latitudetechnolabs.com</a> */}
              <input type="email" id="email" placeholder="Enter Your Gmail" required/>
            </div>
            <div className="input-wrap">
              <textarea name="" id="message" cols="50" rows="5" placeholder="Your Message"></textarea>
            </div>
            <div className="submit-btn-wrap">
            <button className="submit-btn"> Submit</button>
            </div>
            
          </div>
          <div className="googleMap-box">
            <iframe
              className="map"
              height="100%"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=latitude technolabs&t=&z=14&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
