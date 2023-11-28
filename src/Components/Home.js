import React from "react";
import transition from "../transition";
import './Home.css';


import Publish from "./Publish";
import Footer from "./Footer";

const Home = () =>{
    return(
        <>
        <div className="homecontent">
            <div className="homeheroleft">
            <h3>A place to self-publish </h3>
            <h2>GRAPHIC NOVELS.</h2>
            <p>You are just one step away from being a writer. Come and publish your graphic novels easily and free of cost with us.</p>
            <div className="herobutton">
            <button>GET STARTED</button>
            <button>TAKE A TOUR</button>

            </div>
           

            </div>
            
            <div className="homeheroright">
            {/*<h1>Home</h1>*/}
            <img alt="" src="/images/awomanwithbook.png" />
        </div>
       
        </div>
       
        <Publish />
       
        <div className="topread">
            <div className="topreadheader">
            <h2>This Month Read.</h2>
            </div>
           <div className="topreadcontent">
           <div className="topreadfirst">
                <img alt="" src="/images/adivinevomit.png" />
                <h5>A divine Vomit</h5>
                <button className="btn-yellow">Read Review</button>
            </div>

            <div className="topreadsecond">
                <img alt="" src="/images/howto.png" />
                <h5>How To stop worrying and start living</h5>
                <button className="btn-yellow">Read Review</button>
            </div>
            <div className="topreadsecond">
                <img alt="" src="/images/youcan.png" />
                <h5>You can</h5>
                <button className="btn-yellow">Read Review</button>
            </div>

           </div>
           

        </div>

        <div className="testimonial">
            <div className="testi-image">
                <img alt="" src="/images/fourpeople.png" />
            </div>
        </div>
        <Footer />
        </>
        
    )
}

export default transition(Home);