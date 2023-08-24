import React from 'react'
import './landingPage.scss'
import MainBackground from '../../assets/images/background-main.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function LandingPage() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <>
    <div className="landingPage-container">
    <div className="landing-left">
        <div className="makingMillions-text">
            <p>Making millions of lives better with our global network of comprehensive healthcare.</p>
            {/* <hr/> */}
        </div>
        
    </div>
    <div className="linkPages-box">
        <div className="card-section ">
            <div className="card-wrap ">
                <div className="card-heading">
                    <h2>Python</h2>
                </div>
                <div className="card-description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ratione quo rerum alias pariatur! Vitae?</p>
                </div>
                <button className="aboutUs-btn">About Us</button>
            </div>
             {/* card-2 */}
             <div className="card-wrap blue-card">
                <div className="card-heading">
                    <h2>React JS</h2>
                </div>
                <div className="card-description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ratione quo rerum alias pariatur! Vitae?</p>
                </div>
                <button className="aboutUs-btn btn-blue">About Us</button>
            </div>
              {/* card-3 */}
              <div className="card-wrap">
                <div className="card-heading">
                    <h2>Node JS</h2>
                </div>
                <div className="card-description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ratione quo rerum alias pariatur! Vitae?</p>
                </div>
                <button className="aboutUs-btn">About Us</button>
            </div>
              {/* card-4 */}
              <div className="card-wrap blue-card">
                <div className="card-heading">
                    <h2>Vue JS</h2>
                </div>
                <div className="card-description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ratione quo rerum alias pariatur! Vitae?</p>
                </div>
                <button className="aboutUs-btn btn-blue">About Us</button>
            </div>
               {/* card-5 */}
               <div className="card-wrap">
                <div className="card-heading">
                    <h2>PHP</h2>
                </div>
                <div className="card-description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ratione quo rerum alias pariatur! Vitae?</p>
                </div>
                <button className="aboutUs-btn">About Us</button>
            </div>
               {/* card-6 */}
               <div className="card-wrap blue-card">
                <div className="card-heading">
                    <h2>Human Resources</h2>
                </div>
                <div className="card-description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ratione quo rerum alias pariatur! Vitae?</p>
                </div>
                <button className="aboutUs-btn btn-blue">About Us</button>
            </div>
            {/* card-over */}
            <div className="background"></div>
            {/* box-section */}
            <div className="box-section">
                {/* box1 */}
            <div className="box-wrap">
                <div className="box-containt ">
                    <p>Python</p>
                </div>
            </div>
            {/* box2 */}
            <div className="box-wrap">
                <div className="box-containt">
                    <p>React JS</p>
                </div>
            </div>
             {/* box3 */}
             <div className="box-wrap">
                <div className="box-containt">
                    <p>Node JS</p>
                </div>
            </div>
             {/* box4 */}
             <div className="box-wrap">
                <div className="box-containt">
                    <p>Vue JS</p>
                </div>
            </div>
             {/* box5 */}
             <div className="box-wrap">
                <div className="box-containt">
                    <p>PHP</p>
                </div>
            </div>
             {/* box6 */}
             <div className="box-wrap">
                <div className="box-containt">
                    <p>Human Resources</p>
                </div>
            </div>
            {/* box-over */}

            </div>
        </div>
    </div>
    </div>

    <div className="liveUpdateAndCarousel-section">
        <div className="liveUpdate-wrap">
            <p>Live Updates</p>
        </div>
        <div className="textCarousel-wrap">
        <Carousel responsive={responsive}
         swipeable={true}
         draggable={true}
         infinite={true}
         autoPlay={true}
         autoPlaySpeed={2000}
         className="carousel-wrap"
         >
  <div className='slideText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, tempora!</div>
  <div className='slideText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, tempora!</div>
  <div className='slideText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, tempora!</div>
  <div className='slideText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, tempora!</div>
</Carousel>

        </div>
    </div>

    
    </>
  )
}
