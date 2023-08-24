import React from 'react'
import '../../Pages/ServicesPage/service.scss';
import DigitalMarketing from '../../assets/icons/digitalMarketing.png'
import Graphics from '../../assets/icons/graphics.png'
import VideoEditing from '../../assets/icons/videEditing.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function Service() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1440 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 1440, min: 992 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 992, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
       };
  return (
    <div className="Service-container">
        <div className="service-section">
            <div className="service-heading">
                <h2>Services</h2>
            </div>
            <div className="ourVision-wrap">
                <h1>Our Vision & Our Goals</h1>
            </div> 
            {/* card-section */}
            <div className="serviceCard-section">
                {/* card1 */}
                <Carousel responsive={responsive}
                    swipeable={true}
                    draggable={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                     className="carousel-wrap"
                     >
                <div className="service-card">
                    <div className="service-logo">
                    <div className="card-logo-wrap">
                        <img src={Graphics} alt="" />
                    </div>
                    </div>
                    <div className="card-heading">
                        <h2>Graphic Design</h2>
                    </div>
                    <div className="card-texts">
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maxime consectetur praesentium quibusdam explicabo quis!</p>
                    </div>
                    <div className="card-btn-wrap">
                        <button>Learn More</button>
                    </div>
                </div>
                    {/* card2 */}
                    <div className="service-card">
                    <div className="service-logo">
                    <div className="card-logo-wrap">
                        <img src={VideoEditing} alt="" />
                    </div>
                    </div>
                    <div className="card-heading">
                        <h2>Video Editing</h2>
                    </div>
                    <div className="card-texts">
                       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maxime consectetur praesentium quibusdam explicabo quis!</p>
                    </div>
                    <div className="card-btn-wrap">
                        <button>Learn More</button>
                    </div>
                </div>
                    {/* card3 */}
                    <div className="service-card">
                    <div className="service-logo">
                    <div className="card-logo-wrap">
                        <img src={DigitalMarketing } alt="" />
                    </div>
                    </div>
                    <div className="card-heading">
                        <h2>Digital Marketing</h2>
                    </div>
                    <div className="card-texts">
                       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maxime consectetur praesentium quibusdam explicabo quis!</p>
                    </div>
                    <div className="card-btn-wrap">
                        <button>Learn More</button>
                    </div>
                </div>

                 {/* card4 */}
                 <div className="service-card">
                    <div className="service-logo">
                    <div className="card-logo-wrap">
                        <img src={DigitalMarketing } alt="" />
                    </div>
                    </div>
                    <div className="card-heading">
                        <h2>Digital Marketing</h2>
                    </div>
                    <div className="card-texts">
                       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maxime consectetur praesentium quibusdam explicabo quis!</p>
                    </div>
                    <div className="card-btn-wrap">
                        <button>Learn More</button>
                    </div>
                </div>
                
                

                </Carousel>

            </div>
        </div>
    </div>
  )
}

export default Service

