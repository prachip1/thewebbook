import React from "react";
import transition from "../transition";
import './Home.css';
import Footer from "./Footer";
import PublishedNovel from "./PublishedNovels";

const Books = () =>{
    return(
        <>
          <div className="books-css">
            <div className="book-content">
            <h3>Published Novels.</h3>
           <PublishedNovel />

            </div>
          
     
       </div>
       <Footer />
        </>
      
    )
}

export default transition(Books);