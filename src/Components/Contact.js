import React from "react";
import transition from "../transition";

import './Contact.css';
import Footer from "./Footer";

const Contact = () =>{
    return(
        <>
      
        <div className="contactcontent">
            <div className="contactheader">
                <h4>Don't keep your query.</h4>
                <h2>We are here to answer.</h2> 
              
            </div>
            <div className="contactform">
                <form>
          
               <input type="text" id="name" placeholder="Name" required />
              
          
              
       
              <input type="email" id="email" placeholder="Email" required  />
             

            
              <textarea type="text" id="message" placeholder=" Message" required/>
             
          <button>Send Help</button>
               
            
    </form>
                
            </div>

           
            
        </div>
        
     <Footer />
     </>
    )
}

export default transition(Contact);