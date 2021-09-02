import React from "react";
import Button from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<div className="footer-container">
			<section className="footer-subscription">
				<p className="footer-subscription-heading">Join M6</p>
				<p className="footer-subscription-text">yp can unsubscribe any time</p>
				<div className="input-areas">
					<form>
						<input
							type="email"
							name="email"
							placeholder="your email"
							className="footer-input"
						/>
						<Button buttonStyle="btn--outline">Subscribe</Button>
					</form>
				</div>
			</section>
			<div className="footer-links">
				<div className="footer-link-wrapper">
					<div className="footer-link-items">
						<h2>About us</h2>
						<Link to="/vision">How it works</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
