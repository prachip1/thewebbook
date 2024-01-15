import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <div className="nav">
            <div className="logo">
             <Link className="nav-link" to="/">
<<<<<<< HEAD
                <p>TheWebBook </p>
               
=======
                BookWeb
>>>>>>> ede7066c0f7919e8594afa0b993f20400a5ac122
             </Link>
            </div>
            <div className="nav-links">
                <div className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </div>

                <div className="nav-item">
<<<<<<< HEAD
                    <Link className="nav-link" to="/how-to-publish">How to Publish?</Link>
                </div>

                <div className="nav-item">
                    <Link className="nav-link" to="/books">Published Novels</Link>
                </div>

                <div className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                </div>

              

=======
                    <Link className="nav-link" to="/about">About Us</Link>
                </div>

>>>>>>> ede7066c0f7919e8594afa0b993f20400a5ac122
                <div className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;