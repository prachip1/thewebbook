import React from "react";  
import './Author.css';

const Author = () =>{
    return(
        <div className="topread">
        <div className="topreadheader">
        <h2>Meet Our Writers.</h2>
        </div>
       <div className="topreadcontent">
       <div className="topreadfirst">
            <img alt="" src="/images/team1.jpg" height="100" width="100" />
            <h5>A divine Vomit</h5>
            <button className="btn-yellow">Read Review</button>
        </div>

        <div className="topreadsecond">
            <img alt="" src="/images/team2.jpg" height="100" width="100" />
            <h5>How To stop worrying and start living</h5>
            <button className="btn-yellow">Read Review</button>
        </div>
        <div className="topreadsecond">
            <img alt="" src="/images/team3.jpg" height="100" width="100"/>
            <h5>You can</h5>
            <button className="btn-yellow">Read Review</button>
        </div>

       </div>
       

    </div>
    )
}
export default Author;