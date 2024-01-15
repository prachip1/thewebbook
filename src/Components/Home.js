import React from "react";
import transition from "../transition";
import './Home.css';


import Publish from "./Publish";
import Author from './Author';
import Footer from "./Footer";
import PublishedNovel from "./PublishedNovels";

const Home = () =>{
    return(
        <>
        <div className="homecontent">
            <div className="homeheroleft">
            <h3>A place to self-publish </h3>
            <h2>GRAPHIC NOVELS.</h2>
            <p>You are just one step away from becoming a writer. Come and publish your graphic novels easily and free of cost with us.</p>
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
        <div className="div-published">
        <h3>Recently Published.</h3>
        <PublishedNovel />
        </div>
       
       
        <Publish />
       
        

    
        <Footer />
        </>
        
    )
}

export default transition(Home);