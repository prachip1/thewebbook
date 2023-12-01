import React from "react";
import './PublishedNovel.css';
import { FaHeart } from "react-icons/fa";

const CardWeb = ({imgsrc,genre,title,rate})=>{
    return(
        <div className="novel-container"> 
        <div className="novel-card">
        <div className="novel-card-header">
            <img src={imgsrc} alt="comics" />
        </div>
        <div className="card-content">
        <div className="card-content-top">
      <FaHeart className="rating-css" /><span className="span-class">{rate}</span>  

        </div>
        <h5 className="novel-card-genere">{genre}</h5>
        <h4 className="novel-card-title">{title}</h4>

  
        
       
   
   {/*author */}

   <div className="card-author">
    <div className="card-author-profile-image">
        <img src="/images/team1.jpg" alt="" />
        </div>
        <div className="card-author-info">
            <strong>Ank Jai</strong>
            <p>Oct 19, 2023</p>
        </div>

   </div>

        </div>
 
    
    </div>
    </div>
    )
}

export default CardWeb;