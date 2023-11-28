import React from "react";
import transition from "../transition";

import Footer from "./Footer";

import './About.css';

const About = () =>{
    return(
      <>
      <div className="about-main">
      <div className="about-header">
      <img alt="" src="/images/aboutus.jpg" className="about-img"/>
     

      </div>
      <div className="about-content">
      <h2>Hello  About us</h2>
      <h5>hashjkdajk lajjljd dhajdhhd jdskljdajdm,skdkajjdk</h5>
      </div>

      <div className="meet-team">
        <div className="meet-team-card">
          <div className="meets">
          <img src="/images/team1.jpg" alt="" />
          <h3>Anothony Hopes</h3>
          <h6>Coordinator</h6>

          </div>
          <div className="meets">
          <img src="/images/team2.jpg" alt="" />
          <h3>Brenda</h3>
          <h6>Organizer</h6>

          </div>
          <div className="meets">
          <img src="/images/team3.jpg" alt="" />
          <h3>Katrina</h3>
          <h6>Organizer</h6>

          </div>
          
        </div>
      </div>
   

      </div>
      
      <Footer />
      </>
    )
}

export default transition(About);