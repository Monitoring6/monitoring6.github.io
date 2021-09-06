import React from "react";
import "./Footer.css";
import Button from "./Button";
import { Link } from "react-router-dom";
import ButtonMailto from "./ButtonMailto";

function Footer() {
	return (
		<div className="footer-container">
			<section className="footer-subscription">
				<p className="footer-subscription-heading">
					궁금하시거나 문의 하실거 있으시면 남겨주세요
				</p>
				{/* <p className="footer-subscription-text">
					You can unsubscribe at any time.
				</p> */}
				<div className="input-areas">
					<form>
						<input
							className="footer-input"
							name="email"
							type="email"
							placeholder="Your Email"
						/>
						<input
							type="submit"
							name="email"
							required
							mailto="kangyeon0728@gmail.com"
							className="submit-button"
						/>

						{/* <ButtonMailto
							label="Send"
							mailto="mailto:kangyeon0728@gmail.com"
							buttonStyle="btn--outline"
							name="email"
						></ButtonMailto> */}
					</form>
				</div>
			</section>

			<section class="social-media">
				<div class="social-media-wrap">
					<div class="footer-logo">
						<Link to="/" className="navbar-logo">
							<img src="images/M6_Logo white png.png" alt="" className="logo" />
						</Link>
					</div>
					<small class="website-rights">M6 © 2020</small>
				</div>
			</section>
		</div>
	);
}

export default Footer;
