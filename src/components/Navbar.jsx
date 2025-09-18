import React from "react";
import "../index.css"; // or App.css

export default function Navbar() {
  return (
    <div className="Navigation">
        <div className="logo">
          <img src="/images/logoImg.png" alt="Beec" className="beec-logo"/>
        </div>

        <div className="Nav-links">
          <span className="Nav-sections-home">Home</span>
          <span className="Nav-sections">Features</span>
          
          <div className="frame-44">
            <span className="solutions-45">Solutions </span>
            <img src="/images/dropicon.svg" alt="" className="drop-icon"/>
          </div>
          <span className="Nav-sections">Pricing</span>
          <span className="Nav-sections">About Us</span>
          <span className="Nav-sections">Client</span>
          <span className="Nav-sections">Blogs</span>
          <span className="Nav-sections">Contact </span>
        </div>
        <div className="button-1">
          <span className="button-text-1">Start Free Trial</span>
        </div>
      </div>
  );
}