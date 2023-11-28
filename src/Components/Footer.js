import React from "react";
import './Footer.css';

import { Link } from "react-router-dom";

import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";


const Footer = () =>{
    return(
        <>
        <div className="footer-main">
        <div className="container row">
			<div className="footer-col">
				<h4>company</h4>
				<ul>
					<li><Link>about us</Link></li>
					<li><Link>our services</Link></li>
					<li><Link>privacy policy</Link></li>
					<li><Link>visit website</Link></li>
				</ul>
			</div>
			<div className="footer-col">
				<h4>get help</h4>
				<ul>
					<li><Link>FAQ</Link></li>
					<li><Link>shipping</Link></li>
					<li><Link>returns</Link></li>
					<li><Link>order status</Link></li>
					<li><Link>payment options</Link></li>
				</ul>
			</div>
			<div className="footer-col">
				<h4>online shop</h4>
				<ul>
					<li><Link>download</Link></li>
					<li><Link>changelog</Link></li>
					<li><Link>github</Link></li>
					<li><Link>all version</Link></li>
				</ul>
			</div>
			<div className="footer-col">
				<h4>follow us</h4>
				<div className="social-links">
				<FaXTwitter />
                <FaInstagram />
                <FaPinterest />
				</div>
			</div>
		</div>

        </div>
        
        </>
    )

}

export default Footer;