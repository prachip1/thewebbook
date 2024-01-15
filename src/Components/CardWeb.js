import React, { useState } from "react";
import './PublishedNovel.css';
import { FaHeart } from "react-icons/fa";

const CardWeb = ({id,imgsrc,genre,title,rate,pubdate,authorn,authimg})=>{
    


const clickclick = (e) =>{

    e.preventDefault();



}




    return(
        <div className="novel-container" onClick={clickclick}> 
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
        <p className="novel-card-desc">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
         remaining essentially unchanged.</p>
  
        
       
   
   {/*author */}

   <div className="card-author">
    <div className="card-author-profile-image">
        <img src={authimg} alt="" />
        </div>
        <div className="card-author-info">
            <strong>{authorn}</strong>
            <p>{pubdate}</p>
        </div>

   </div>

        </div>
 
    
    </div>
        </div>
    )
}

export default CardWeb;