import React from "react";
import transition from "../transition";
import './HowToPublish.css';


import Footer from "./Footer";
import Publish from "./Publish";

const HowToPublish = () =>{
    return(
        <>
       <div className="howto-css">
            <video autoPlay loop muted>
            <source src="videos/how-to-publish.mp4" type="video/mp4"></source>
            </video>
        
            <div className="video-content">
            <h4>WebHook care for your writings.</h4>
            <h5>Note that the Font Awesome icons weren't designed like the Material Icons</h5> 
            <button>PUBLISH NOW</button> 
            </div>
        </div>  
         
            
       
          
         
   
        <div className="how-lower-section">
        <Publish />
        
        <Footer />

        </div>

       
      
        </>
        
       
    )
}

export default transition(HowToPublish);