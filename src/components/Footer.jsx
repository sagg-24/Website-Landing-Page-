import React from "react";
import "../index.css"; // or App.css
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
     <div>
        {/* footer Section */}
        <div className="footer">

          
          {/* Call To Action */}
            <div className="cta">
            <img src="/images/CTA-img.png" alt="" className="back-img" />
              <div className="overlay" >
              <div/>
              <div className="frame-3a">
      
                <div className="CTA-Text">
                  <span className="CTA-Title">
                    Ready to Transform Your Business?
                  </span>
                  <span className="CTA-Discription">
                    Join thousands of successful businesses that have
                    streamlined their operations and boosted their sales with
                    Beec POS.
                  </span>
                </div>
                
                  <div className="button-1">
                    <span className="button-text-1">
                      Start Your Free Trial{" "}
                    </span>
                 
                </div>
              </div>
               <img src="/images/mockup-img.png" alt="" className="mockup"/>
            </div>
          </div>

          {/* Footer Main */}

          <div className="footer-desktop">
            <div className="frame-3e">
              <div className="horizontal">

                {/* Left side */}

                <div className="left">
                  <div className="frame-3f">
                    <div className="logo">
          <img src="/images/logoImg.png" alt="beec-logo" className="beec-logo"/>
        </div>
                    <div className="container-40">
                      <span className="footr-discription">
                        BEEC delivers innovative POS solutions designed to
                        simplify operations, boost efficiency, and empower
                        businesses of all sizes to grow smarter.
                      </span>
                    </div>
                  </div>

                      {/* Social links */}
                     <div className="follow-us">
                       <span className="social-title">Follow us</span>
                       <div className="social-icons">
                         <a href="Facebook"><FaFacebook /></a>
                         <a href="Instagram"><FaInstagram /></a>
                         <a href="Linkedin"><FaLinkedin /></a>
                         <a href="Twitter"><FaXTwitter /></a>
                         <a href="Youtube"><FaYoutube /></a>
                       </div>
                     </div>
                          
                  <div className="benefits">
                    <div className="portfolio" />
                    <div className="pricing" />
                  </div>
                </div>

                {/* Right side - Menu */}
              <div className="footer-menus">
                <div className="menu-section">
                  <h4>Menu</h4>
                  <ul>
                    <li><a href="Benefits">Benefits</a></li>
                    <li><a href="Portfolio">Portfolio</a></li>
                    <li><a href="Pricing">Pricing</a></li>
                    <li><a href="Testimonials">Testimonials</a></li>
                    <li><a href="FAQs">FAQs</a></li>
                  </ul>
                </div>

                {/* Pages section */}
                <div className="menu-section">
                  <h4>Pages</h4>
                  <ul>
                    <li><a href="Home">Home</a></li>
                    <li><a href="Blog">Blog</a></li>
                    <li><a href="Contact Us">Contact Us</a></li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="contact-section">
                  <h4>Contact Info</h4>
                  <ul>
                    <li><FaEnvelope /> info@Heegan.com</li>
                    <li><FaPhone /> +2529 0029 2637</li>
                    <li><FaGlobe /> www.website.com</li>
                    <li><FaMapMarkerAlt /> Jowhara Apartment, Zoobe, 
                    <br></br>Mogadishu, Somalia</li>
                  </ul>
                </div>
              </div>
              </div>

              {/* Bottom copyright */}
              <footer className="footer-bottom">
                <p>Heegan Technology © 2025. All rights reserved.</p>
                <div className="footer-links">
                  <a href="Contact Us">Contact Us</a>
                  <span className="dot" />
                  <a href="link">Start Your Free Trial</a>
                </div>
              </footer>


            </div>
            <div className="box-1a" />
          </div>
        </div>
     </div>
      );
}

export default Footer;