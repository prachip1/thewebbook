import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <div className="nav">
            <div className="logo">
             <Link className="nav-link" to="/">
                <p>TheWebBook </p>
               
             </Link>
            </div>
            <div className="nav-links">
                <div className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </div>

                <div className="nav-item">
                    <Link className="nav-link" to="/clubs">How to Publish?</Link>
                </div>

                <div className="nav-item">
                    <Link className="nav-link" to="/books">Published Novels</Link>
                </div>

                <div className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                </div>

              

                <div className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;