import React from "react";
import transition from "../transition";
import './Home.css';
import Footer from "./Footer";

const Books = () =>{
    return(
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
        <div className="topreadsecond">
            <img alt="" src="/images/breastsandegg.png" />
            <h5>You can</h5>
            <button className="btn-yellow">Read Review</button>
        </div>

       </div>
       <Footer />
       </div>
    )
}

export default transition(Books);