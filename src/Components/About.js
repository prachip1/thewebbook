import React from "react";
import transition from "../transition";

import Footer from "./Footer";
import { Link } from "react-router-dom";
import './About.css';

import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";

const About = () =>{
    return(
      <div className="about-main">
        <div className="video-section">
        <video autoPlay loop muted>
            <source src="videos/about-us-video.mp4" type="video/mp4"></source>
          </video>
          <div className="gradient">
          
          </div>
          <div className="about-video-content">
            <h4>We are here to make </h4><h4>your work easy.</h4>
            <p>Just get it done the way you want <br></br>get it done.</p>
            <button>PUBLISH NOW</button> 
          </div>
          
        </div>
        
      {/*<div className="about-header">
    {/*<img alt="" src="/images/aboutus.jpg" className="about-img"/> 
      <h2>Know about our WRITERS.</h2>
      <h5>Arts are collected here.</h5>

    
      </div>*/ }


      <div className="about-content">
          <div className="auth-header">
          
          </div>

         <div className="auth-img">
          <img src="/images/team1bg.png" alt="" className="about-image-css"/>
         </div>
        <div className="about-right-content">
          <p>"The response from readers inspire us Artists to create better."</p>
          <h3>Brenda</h3>
           <h6>Artist, Writer</h6>
           <ul className="socials-css">
                <li><FaXTwitter /></li>
               <li><FaInstagram /></li> 
               <li><FaPinterest /></li> 
            </ul>
          <div className="links-css">
          <Link to="#">check more books by this writer</Link>

          </div>
        </div> 
      </div>

      <div className="meet-team">
        <div className="meets">
          <p>"My thoughts were pretty clear when I started writing "Pretty Lions" and I have many more thoughts"</p>
          <h3>Joe</h3>
          <h6>Writer, Editor</h6>
          <div className="socials-second-row">
        <ul className="socials-css">
          <li><FaXTwitter /></li>
               <li><FaInstagram /></li> 
               <li><FaPinterest /></li> 
            </ul>
          <div className="links-css">
          <Link to="#">check more books by this writer</Link>

          </div>

        </div>
            
        </div>
      
        

          <div className="meets-img">
          <img src="/images/team2bg.png" alt="" />
          </div>
          
         

          
       

      </div>
      <div className="meet2-team">
        <div className="meet2-img">
        <img src="/images/team3bg.png" alt="" />
        </div>
         
         <div className="meet2-content">
         <p>I never knew CRUEL DREAMS will get these many reactions.</p>
          <h3>Ash</h3>
          <h6>Writer</h6>
          
            <ul className="socials-css">
            <li><FaXTwitter /></li>
               <li><FaInstagram /></li> 
               <li><FaPinterest /></li> 
            </ul>
          <div className="links-css">
          <Link to="#">check more books by this writer</Link>

          </div>
   
         </div>
          
      </div>
   

      
      <div className="about-footer">
      <Footer />
      </div>
    
      </div>
    )
}

export default transition(About);