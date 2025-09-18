import React from "react";
import "../index.css";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="hero">
        <div className="frame-48">

          <div className="background">
            <div className="hero-background">
            </div>
          </div>
          <div className="Hero-info">
            <div className="Hero-Text">
              <div className="small-Add-Text">
                <div className="icon">
          <img src="/images/starimg.svg" alt="Beec" className="icon-with-text"/>
        </div>
                <span className="small-Hook">
                  Trusted by 200,000 businesses
                </span>
              </div>
              <span className="Hook">Your POS, Your Way</span>
              <span className="Hook-Discription">
                Streamline operations, boost sales, and delight customers with
                our cloud-based point-of-sale system designed for modern
                businesses.
              </span>
              <div className="buttons">
                <div className="button-1">
                  <span className="button-text-1"> Start Your Free Trial </span>
                </div>
                <div className="button-2">
                  <span className="button-text-2">Contact Sales</span>
                </div>
              </div>
            </div>
            <div className="Hook-Image">
            <img src="/images/Hero-img.png" alt="" className="Hook-Image"/>
            </div>
          </div>
        </div>

        {/* Logos Section */}
        <img src="/images/logs.png" alt="" className="logs"/>
         
      </div>

      {/* Features Section */}
      <div className="Features">
        <div className="frame-1">
          <div className="title">
            <div className="litle-title-background">
              <span className="litle-title">Key Features </span>
            </div>
            <div className="HEAD">
              <span className="Heading">
                All-in-One Software Solution for Seamless Business Management
              </span>
              <span className="Heading-discription">
                Everything your business needs in one powerful, easy-to-use
                platform — streamline operations, save time, and boost
                productivity.
              </span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="Features-Grid">
            <div className="flex-row-d">
              <div className="Grid-1">
                <div><img src="/images/1.png" alt="" className="Grid-image"/></div>

                <div className="text">
                  <span className="small-title">
                    Real-Time Analytics
                  </span>
                  <span className="title-Discription">
                    Gain instant access to critical financial data with
                    real-time analytics.
                  </span>
                </div>
              </div>

              <div className="Grid-2">
                <div><img src="/images/2.png" alt="" className="Grid-image"/></div>
                
                <div className="text">
                  <span className="small-title">
                    Seamless Integration
                  </span>
                  <span className="title-Discription1">
                    Our platform integrates effortlessly with your existing
                    financial systems, ensuring a smooth transition.
                  </span>
                </div>
              </div>
            </div>

            <div className="flex-row-d">
            <div className="Grid-3">
              <div><img src="/images/3.png" alt="" className="Grid-image"/></div>
                
                <div className="text">
                  <span className="small-title">
                    Real-Time Analytics
                  </span>
                  <span className="title-Discription1">
                    Gain instant access to critical financial data with
                    real-time analytics. Make informed decisions faster.
                  </span>
                </div>
              </div>
              <div className="Grid-4">
                <div><img src="/images/4.png" alt="" className="Grid-image"/></div>
                <div className="text">
                  <span className="small-title">
                    Custom Reporting Tools
                  </span>
                  <span className="title-Discription">
                    Create and customize reports tailored to your specific needs.
                  </span>
                </div>
              </div>
           </div>
          </div>
        </div>

        {/* Video Section */}
<div className="video">
  <img src="/images/vedio-img.png" alt="" className="video-img" />
  <div className="video-play-button">
    <img src="/images/play-img.svg" alt="" className="polygon" />
  </div>
</div>

      </div>

      {/* solutions Section */}

        <div className="solutions">
          <div className="frame-11">

            <div className="title">

            <div className="litle-title-background">
              <span className="litle-title">Key Solutions </span>
            </div>
            <div className="HEAD">
              <span className="Heading">
                Empower Your Business Operations with BEEC POS Solutions
              </span>
              <span className="Heading-discription">
                Streamline and elevate your business with BEEC POS Solutions — smart, efficient, and tailored to empower your daily operations.
              </span>
            </div>
          </div>
          

           {/* Solutions Grid */}
          <div className="list">

            <div className="Solutions-Grid">
              <img src="/images/s1-img.png" alt="" className="Grid-img-background"/>
              <div className="Grid-2-background" />

              <div className="Grid-text-Solutions">
                <span className="heading-Grid-solutions">Restaurants</span>
                <span className="heading-Grid-discription">
                  Streamline your restaurant operations from orders to payments.
                </span>
                <div className="Grid-link">
                  <span className="Grid-link-text">See Solutions</span>
                </div>
              </div>
            </div>

           
            <div className="Solutions-Grid">
              <img src="/images/s2-img.png" alt="" className="Grid-img-background"/>

              <div className="Grid-text-Solutions">
                <span className="heading-Grid-solutions">Retail</span>
                <span className="heading-Grid-discription">
                  Perfect for clothing stores, electronics, and general retail
                  businesse.
                </span>
                <div className="Grid-link">
                  <span className="Grid-link-text">See Solutions</span>
                </div>
              </div>
            </div>

            <div className="Solutions-Grid">
              <img src="/images/s3-img.png" alt="" className="Grid-img-background"/>
              <div className="Grid-text-Solutions">
                <span className="heading-Grid-solutions">Pharmacies</span>
                <span className="heading-Grid-discription">
                  Specialized features for pharmaceutical and healthcare
                  businesses.
                </span>
                <div className="Grid-linke">
                  <span className="Grid-link-text">See Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>


        {/* Testimonials Section */}
<section className="testimonials">
  <div className="frame-11">
    <div className="litle-title-background">
      <span className="litle-title">Key Testimonials</span>
    </div>
    <div className="HEAD">
      <h2 className="Heading">What Our Clients Say About Us</h2>
      <p className="Heading-discription">
        Everything your business needs in one powerful, easy-to-use platform — 
        streamline operations, save time, and boost productivity.
      </p>
    </div>
  </div>

  <div className="testimonial-cards">
    {[
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Heegan Technology",
        role: "Software Solutions",
        img: "images/heegan-logo.png"
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Heegan Technology",
        role: "Business Partner",
        img: "images/heegan-logo.png"
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Heegan Technology",
        role: "Enterprise Client",
        img: "images/heegan-logo.png"
      }
    ].map((testimonial, index) => (
      <div key={index} className="testimonial-card">
        <p className="testimonial-text">{testimonial.text}</p>
        <div className="testimonial-footer">
          <img
            src={testimonial.img}
            alt={testimonial.name}
            className="avatar"
          />
          <div>
            <span className="client-name">{testimonial.name}</span>
            <span className="client-role">{testimonial.role}</span>
          </div>
        </div>
      </div>
    ))}
  </div>

  <div className="button-2">
     <span className="button-text-2"> See More </span>
   </div>
</section>


       
      {/* Footer */}
      <Footer />
    </div>
  );
}
