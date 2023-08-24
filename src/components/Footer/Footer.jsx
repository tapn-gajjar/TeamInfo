import React from 'react'
import '../Footer/footer.scss'
import Logo from '../../assets/images/Latitude Logo.png'
function Footer() {
  return (
    <div className="Footer-container">
        <div className="footer-section">
            {/* box1 */}
            <div className='footer-box box1'>
                <div className="logo-wrap">
                    <img src={Logo} alt="" />
                </div>
                <div className="footer-logo-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem mollitia fugiat quos qui veritatis adipisci obcaecati debitis rerum et a?</p>
                </div>
            </div>
            {/* box2 */}
            <div className='footer-box box2'>
                <div className="footer-heading">
                    <h4>COMPANY</h4>
                </div>
                <div className="footer-pages">
                   <p>Blog</p>
                   <p>Our Team</p>
                   <p>Privacy Policy</p>
                   <p>Terms Of Service</p>
                   <p>Contact Us</p>
                </div>
            </div>
              {/* box3 */}
              <div className='footer-box box3'>
                <div className="footer-heading">
                    <h4>WHY LATITUDE</h4>
                </div>
                <div className="footer-pages">
                   <p>Porfolio</p>
                   <p>About Us</p>
                   <p>Apply For A Job</p>
                   <p>Case Studies</p>
                   <p>Team</p>
                   <p>Life At Latitude Technolabs</p>
                   <p>Refer And Earn</p>
                </div>
            </div>
             {/* box4 */}
             <div className='footer-box box4'>
                <div className="footer-heading">
                    <h4>HIRE US</h4>
                </div>
                <div className="footer-pages">
                   <p>ReactJS Developers</p>
                   <p>Flutter Developers</p>
                   <p>React Native Developers</p>
                   <p>Angular Developers</p>
                   <p>IOS Developers</p>
                   <p>WordPress Developers</p>  
                </div>
            </div>
                 {/* box5 */}
                 <div className='footer-box box5'>
                <div className="footer-heading">
                    <h4>CONTACT CHANNELS</h4>
                </div>
                <div className="footer-email-wrap">
                  <p>Email: sales@latitudetechnolabs.com</p>
                </div>
                <div className="addres-wrap">
                    <h4>Address</h4>
                    <p>B 401, Wing B, Safal Pegasus, Opposite Venus Atlantis, Near Shell Petrol Pump, Behind Mc Donald, Satellite, Prahlad Nagar, Ahmedabad, Gujarat 380015</p>
                
                </div>
                <div className="footer-call-wrap">
                    <h4>CALL US</h4>
                    <p>+918035060792</p>
                </div>
            </div>
                </div>
        <div className="copyRight-layout">
            <div className="copyRight-containt">
                <div className="allRight-wrap">
                    <p>All Right reserved</p>
                </div>
                <div className="designBy-wrap">
                    <p>© 2023 Designed by <span>Latitude Technolabs PVT LTD.</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer